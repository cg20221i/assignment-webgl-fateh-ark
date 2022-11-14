function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const shape_1 = createShape();
    const shape_2 = createShape();
    const shape_3 = createShape();
    const shape_4 = createShape();

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var shape_1_X = 0.0;
    var shape_2_scaleSpeed = 0.01;
    var shape_3_

    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // For the camera
    var camera = [0.0, 0.0, 7.5];
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [0.0, 0.0, 0.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
    // For the projection

    var cameraFOV = 75;
    var cameraAspect = 1.0;
    var cameraNearClip = 0.5;
    var cameraFarClip = 50.0;

    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        cameraFOV*(Math.PI/180),  // 60 degrees
        cameraAspect,
        cameraNearClip, 
        cameraFarClip
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.4);             // 40% intensity
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [0.0, 0.0, 4.8]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");

    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        var model = glMatrix.mat4.create();
        var normalModel = glMatrix.mat3.create();

        gl.uniformMatrix4fv(uModel, false, model);

        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        drawShape(shape_1);
       
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    function createShape(vertices, indices) {
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
        return {
          buffer,
          indexBuffer,
          indices_lenght: indices.length,
        };
    }
    
    function drawShape(shape) {
        gl.bindBuffer(gl.ARRAY_BUFFER, shape.buffer);
        gl.bindBuffer(ELEMENT_ARRAY_BUFFER, shape.indexBuffer);
      
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(
            aPosition, 
            3, 
            gl.FLOAT, 
            false, 
            9 * Float32Array.BYTES_PER_ELEMENT, 
            0);
        gl.enableVertexAttribArray(aPosition);
        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(
            aColor, 
            3, 
            gl.FLOAT, 
            false, 
            9 * Float32Array.BYTES_PER_ELEMENT, 
            3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aColor);
        var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
        gl.vertexAttribPointer(
            aNormal, 
            3, 
            gl.FLOAT, 
            false, 
            9 * Float32Array.BYTES_PER_ELEMENT, 
            6 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aNormal);
    
        gl.drawElements(gl.TRIANGLES, shape.indices_length , gl.UNSIGNED_SHORT, 0);
    }
}

