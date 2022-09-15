function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        -0.605, 0.756, 
        -0.68, 0.82, 
        -0.355, 0.88, 
        -0.18, 0.868, 
        -0.305, 0.572, 
        -0.13, 0.56, 
        -0.16, 0.488, 
        -0.7, 0.528, 
        -0.67, 0.594, 
        -0.49, 0.582, 
        -0.395, 0.796,

        0.155, 0.316, 
        0.105, 0.384, 
        0.24, 0.322, 
        0.23, 0.392, 
        0.325, 0.33, 
        0.32, 0.4, 
        0.42, 0.338, 
        0.415, 0.408, 
        0.49, 0.344, 
        0.5, 0.416, 
        0.745, 0.43, 
        0.52, 0.396, 
        0.73, 0.396, 
        0.52, 0.376, 
        0.715, 0.37, 
        0.535, 0.354, 
        0.7, 0.334, 
        0.505, 0.332, 
        0.68, 0.304, 
        0.49, 0.304, 
        0.665, 0.27, 
        0.475, 0.27, 
        0.65, 0.244, 
        0.455, 0.234, 
        0.635, 0.214, 
        0.44, 0.204, 
        0.62, 0.182, 
        0.43, 0.178, 
        0.605, 0.158, 
        0.405, 0.154, 
        0.6, 0.14, 
        0.405, 0.132, 
        0.585, 0.118, 
        0.39, 0.108, 
        0.575, 0.094, 
        0.38, 0.086, 
        0.565, 0.074, 
        0.37, 0.068, 
        0.55, 0.052, 
        0.36, 0.052, 
        0.53, 0.034
    
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main () {
            gl_PointSize = 5.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        void main() {
            gl_FragColor = vec4(1.0, 0.8, 0.8, 1.0);
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.clearColor(0.2, 0.1,   0.0,  1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.drawArrays(gl.LINE_LOOP, 0, 11);
    gl.drawArrays(gl.LINE_STRIP,11,41);
}