function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Vertices Positions
    var vertices = [
        // Number 1
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

        // Number 7
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
        0.53, 0.034,

        // Letter A
        -0.35, -0.008, 
        -0.12, -0.028, 
        -0.235, -0.078, 
        -0.115, -0.034, 
        -0.1, -0.094, 
        -0.255, -0.1, 
        -0.365, -0.02, 
        -0.255, -0.088, 
        -0.49, -0.11, 
        -0.275, -0.1, 
        -0.5, -0.128, 
        -0.355, -0.162, 
        -0.265, -0.11, 
        -0.1, -0.1, 
        -0.255, -0.184, 
        -0.515, -0.138, 
        -0.36, -0.17, 
        -0.645, -0.23, 
        -0.095, -0.116, 
        -0.25, -0.202, 
        -0.075, -0.226, 
        -0.375, -0.182, 
        -0.65, -0.24, 
        -0.46, -0.246, 
        -0.25, -0.21, 
        -0.07, -0.234, 
        -0.235, -0.314, 
        -0.255, -0.268, 
        -0.445, -0.254, 
        -0.525, -0.318, 
        -0.255, -0.278, 
        -0.48, -0.322, 
        -0.245, -0.34, 
        -0.46, -0.252, 
        -0.65, -0.246, 
        -0.615, -0.384, 
        -0.07, -0.246, 
        -0.23, -0.326, 
        -0.05, -0.348, 
        -0.665, -0.25, 
        -0.805, -0.366, 
        -0.62, -0.394, 
        -0.23, -0.34, 
        -0.045, -0.364, 
        -0.225, -0.4, 
        -0.045, -0.372, 
        -0.22, -0.41, 
        -0.035, -0.428,

        // Letter R
        0.01, -0.532, 
        0.36, -0.504, 
        0.605, -0.522, 
        0.715, -0.572, 
        0.75, -0.634, 
        0.715, -0.702, 
        0.615, -0.746, 
        0.85, -0.858, 
        0.67, -0.886, 
        0.43, -0.778, 
        0.32, -0.784, 
        0.37, -0.904, 
        0.185, -0.916
    
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

    // Backround Color
    gl.clearColor(0.2, 0.1,   0.0,  1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Vertices Attrib Positions Preps
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    //Renders
    gl.drawArrays(gl.LINE_LOOP, 0, 11); // Number 1
    gl.drawArrays(gl.LINE_STRIP,11,41); // Number 7
    gl.drawArrays(gl.TRIANGLES,52,48); // Letter A
    gl.drawArrays(gl.TRIANGLE_FAN,100,13); // Letter R
}