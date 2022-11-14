function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // Number 1
        -0.605, 0.756, 5,   1, 1, 1,    0, 0, 1,  // 0
        -0.68, 0.82, 5,     1, 1, 1,    0, 0, 1,
        -0.68, 0.82, 4,    1, 1, 1,    0, 0, 1,
        -0.605, 0.756, 4,  1, 1, 1,    0, 0, 1, 

        -0.68, 0.82, 5,     1, 1, 1,    0, 0, 1,  // 4
        -0.355, 0.88, 5,    1, 1, 1,    0, 0, 1,
        -0.355, 0.88, 4,   1, 1, 1,    0, 0, 1,
        -0.68, 0.82, 4,    1, 1, 1,    0, 0, 1, 

        -0.355, 0.88, 5,    1, 1, 1,    0, 0, 1,  // 8
        -0.18, 0.868, 5,    1, 1, 1,    0, 0, 1,
        -0.18, 0.868, 4,   1, 1, 1,    0, 0, 1,
        -0.355, 0.88, 4,   1, 1, 1,    0, 0, 1, 

        -0.18, 0.868, 5,    1, 1, 1,    0, 0, 1,  // 12
        -0.305, 0.572, 5,   1, 1, 1,    0, 0, 1,
        -0.305, 0.572, 4,  1, 1, 1,    0, 0, 1,
        -0.18, 0.868, 4,   1, 1, 1,    0, 0, 1,
        
        -0.305, 0.572, 5,   1, 1, 1,    0, 0, 1,  // 16
        -0.13, 0.56, 5,     1, 1, 1,    0, 0, 1,
        -0.13, 0.56, 4,    1, 1, 1,    0, 0, 1,
        -0.305, 0.572, 4,  1, 1, 1,    0, 0, 1,  

        -0.13, 0.56, 5,     1, 1, 1,    0, 0, 1,  // 20
        -0.16, 0.488, 5,    1, 1, 1,    0, 0, 1,
        -0.16, 0.488, 4,   1, 1, 1,    0, 0, 1,
        -0.13, 0.56, 4,    1, 1, 1,    0, 0, 1, 
 
        -0.16, 0.488, 5,    1, 1, 1,    0, 0, 1, // 24
        -0.7, 0.528, 5,     1, 1, 1,    0, 0, 1, 
        -0.7, 0.528, 4,    1, 1, 1,    0, 0, 1, 
        -0.16, 0.488, 4,   1, 1, 1,    0, 0, 1,

        -0.7, 0.528, 5,     1, 1, 1,    0, 0, 1, // 28
        -0.67, 0.594, 5,    1, 1, 1,    0, 0, 1,
        -0.67, 0.594, 4,    1, 1, 1,    0, 0, 1,
        -0.7, 0.528, 4,    1, 1, 1,    0, 0, 1, 
 
        -0.67, 0.594, 5,    1, 1, 1,    0, 0, 1, // 32
        -0.49, 0.582, 5,     1, 1, 1,    0, 0, 1,
        -0.49, 0.582, 4,     1, 1, 1,    0, 0, 1,
        -0.67, 0.594, 4,    1, 1, 1,    0, 0, 1,

        -0.49, 0.582, 5,     1, 1, 1,    0, 0, 1, // 36
        -0.395, 0.796, 5,    1, 1, 1,    0, 0, 1,
        -0.395, 0.796, 4,    1, 1, 1,    0, 0, 1,
        -0.49, 0.582, 4,     1, 1, 1,    0, 0, 1,

        -0.395, 0.796, 5,    1, 1, 1,    0, 0, 1, // 40
        -0.605, 0.756, 5,     1, 1, 1,    0, 0, 1,
        -0.605, 0.756, 4,     1, 1, 1,    0, 0, 1,
        -0.395, 0.796, 4,    1, 1, 1,    0, 0, 1,

        // Number 7
        0.155, 0.316, 5,      1, 0, 0,    0, 0, 1, // 44
        0.105, 0.384, 5,      1, 0, 0,    0, 0, 1,
        0.105, 0.384, 4,      1, 0, 0,    0, 0, 1,
        0.155, 0.316, 4,      1, 0, 0,    0, 0, 1,

        0.105, 0.384, 5,      1, 0, 0,    0, 0, 1, // 48
        0.24, 0.322, 5,      1, 0, 0,    0, 0, 1,
        0.24, 0.322, 4,      1, 0, 0,    0, 0, 1,
        0.105, 0.384, 4,      1, 0, 0,    0, 0, 1,

        0.24, 0.322, 5,      1, 0, 0,    0, 0, 1, // 52
        0.23, 0.392, 5,      1, 0, 0,    0, 0, 1,
        0.23, 0.392, 4,      1, 0, 0,    0, 0, 1,
        0.24, 0.322, 4,      1, 0, 0,    0, 0, 1,

        0.23, 0.392, 5,      1, 0, 0,    0, 0, 1, // 56
        0.325, 0.33, 5,      1, 0, 0,    0, 0, 1,
        0.325, 0.33, 4,      1, 0, 0,    0, 0, 1,
        0.23, 0.392, 4,      1, 0, 0,    0, 0, 1,

        0.325, 0.33, 5,      1, 0, 0,    0, 0, 1, // 60
        0.32, 0.4, 5,      1, 0, 0,    0, 0, 1,
        0.32, 0.4, 4,      1, 0, 0,    0, 0, 1,
        0.325, 0.33, 4,      1, 0, 0,    0, 0, 1,

        0.32, 0.4, 5,      1, 0, 0,    0, 0, 1, // 64
        0.42, 0.338, 5,      1, 0, 0,    0, 0, 1,
        0.42, 0.338, 4,      1, 0, 0,    0, 0, 1,
        0.32, 0.4, 4,      1, 0, 0,    0, 0, 1,

        0.42, 0.338, 5,      1, 0, 0,    0, 0, 1, // 68
        0.415, 0.408, 5,      1, 0, 0,    0, 0, 1,
        0.415, 0.408, 4,      1, 0, 0,    0, 0, 1,
        0.42, 0.338, 4,      1, 0, 0,    0, 0, 1,

        0.415, 0.408, 5,      1, 0, 0,    0, 0, 1, // 72
        0.49, 0.344, 5,      1, 0, 0,    0, 0, 1,
        0.49, 0.344, 4,      1, 0, 0,    0, 0, 1,
        0.415, 0.408, 4,      1, 0, 0,    0, 0, 1,

        0.49, 0.344, 5,      1, 0, 0,    0, 0, 1, // 76
        0.5, 0.416, 5,      1, 0, 0,    0, 0, 1,
        0.5, 0.416, 4,      1, 0, 0,    0, 0, 1,
        0.49, 0.344, 4,      1, 0, 0,    0, 0, 1,

        0.5, 0.416, 5,      1, 0, 0,    0, 0, 1, // 80
        0.745, 0.43, 5,      1, 0, 0,    0, 0, 1,
        0.745, 0.43, 4,      1, 0, 0,    0, 0, 1,
        0.5, 0.416, 4,      1, 0, 0,    0, 0, 1,

        0.745, 0.43, 5,      1, 0, 0,    0, 0, 1, // 84
        0.52, 0.396, 5,      1, 0, 0,    0, 0, 1,
        0.52, 0.396, 4,      1, 0, 0,    0, 0, 1,
        0.745, 0.43, 4,      1, 0, 0,    0, 0, 1,

        0.52, 0.396, 5,      1, 0, 0,    0, 0, 1, // 88
        0.73, 0.396, 5,      1, 0, 0,    0, 0, 1,
        0.73, 0.396, 4,      1, 0, 0,    0, 0, 1,
        0.52, 0.396, 4,      1, 0, 0,    0, 0, 1,

        0.73, 0.396, 5,      1, 0, 0,    0, 0, 1, // 92
        0.52, 0.376, 5,      1, 0, 0,    0, 0, 1,
        0.52, 0.376, 4,      1, 0, 0,    0, 0, 1,
        0.73, 0.396, 4,      1, 0, 0,    0, 0, 1,

        0.52, 0.376, 5,      1, 0, 0,    0, 0, 1, // 96
        0.715, 0.37, 5,      1, 0, 0,    0, 0, 1,
        0.715, 0.37, 4,      1, 0, 0,    0, 0, 1,
        0.52, 0.376, 4,      1, 0, 0,    0, 0, 1,

        0.715, 0.37, 5,      1, 0, 0,    0, 0, 1, // 100
        0.535, 0.354, 5,      1, 0, 0,    0, 0, 1,
        0.535, 0.354, 4,      1, 0, 0,    0, 0, 1,
        0.715, 0.37, 4,      1, 0, 0,    0, 0, 1,

        0.535, 0.354, 5,      1, 0, 0,    0, 0, 1, // 104
        0.7, 0.334, 5,      1, 0, 0,    0, 0, 1,
        0.7, 0.334, 4,      1, 0, 0,    0, 0, 1,
        0.535, 0.354, 4,      1, 0, 0,    0, 0, 1,

        0.7, 0.334, 5,      1, 0, 0,    0, 0, 1, // 108
        0.505, 0.332, 5,      1, 0, 0,    0, 0, 1,
        0.505, 0.332, 4,      1, 0, 0,    0, 0, 1,
        0.7, 0.334, 4,      1, 0, 0,    0, 0, 1,

        0.505, 0.332, 5,      1, 0, 0,    0, 0, 1, // 112
        0.68, 0.304, 5,      1, 0, 0,    0, 0, 1,
        0.68, 0.304, 4,      1, 0, 0,    0, 0, 1,
        0.505, 0.332, 4,      1, 0, 0,    0, 0, 1,

        0.68, 0.304, 5,      1, 0, 0,    0, 0, 1, // 116
        0.49, 0.304, 5,      1, 0, 0,    0, 0, 1,
        0.49, 0.304, 4,      1, 0, 0,    0, 0, 1,
        0.68, 0.304, 4,      1, 0, 0,    0, 0, 1,

        0.49, 0.304, 5,      1, 0, 0,    0, 0, 1, // 120
        0.665, 0.27, 5,      1, 0, 0,    0, 0, 1,
        0.665, 0.27, 4,      1, 0, 0,    0, 0, 1,
        0.49, 0.304, 4,      1, 0, 0,    0, 0, 1,

        0.665, 0.27, 5,      1, 0, 0,    0, 0, 1, // 124
        0.475, 0.27, 5,      1, 0, 0,    0, 0, 1,
        0.475, 0.27, 4,      1, 0, 0,    0, 0, 1,
        0.665, 0.27, 4,      1, 0, 0,    0, 0, 1,

        0.475, 0.27, 5,      1, 0, 0,    0, 0, 1, // 128
        0.65, 0.244, 5,      1, 0, 0,    0, 0, 1,
        0.65, 0.244, 4,      1, 0, 0,    0, 0, 1,
        0.475, 0.27, 4,      1, 0, 0,    0, 0, 1,

        0.65, 0.244, 5,      1, 0, 0,    0, 0, 1, // 132
        0.455, 0.234, 5,      1, 0, 0,    0, 0, 1,
        0.455, 0.234, 4,      1, 0, 0,    0, 0, 1,
        0.65, 0.244, 4,      1, 0, 0,    0, 0, 1,

        0.455, 0.234, 5,      1, 0, 0,    0, 0, 1, // 136
        0.635, 0.214, 5,      1, 0, 0,    0, 0, 1,
        0.635, 0.214, 4,      1, 0, 0,    0, 0, 1,
        0.455, 0.234, 4,      1, 0, 0,    0, 0, 1,

        0.635, 0.214, 5,      1, 0, 0,    0, 0, 1, // 140
        0.44, 0.204, 5,      1, 0, 0,    0, 0, 1,
        0.44, 0.204, 4,      1, 0, 0,    0, 0, 1,
        0.635, 0.214, 4,      1, 0, 0,    0, 0, 1,

        0.44, 0.204, 5,      1, 0, 0,    0, 0, 1, // 144
        0.62, 0.182, 5,      1, 0, 0,    0, 0, 1,
        0.62, 0.182, 4,      1, 0, 0,    0, 0, 1,
        0.44, 0.204, 4,      1, 0, 0,    0, 0, 1,

        0.62, 0.182, 5,      1, 0, 0,    0, 0, 1, // 148
        0.43, 0.178, 5,      1, 0, 0,    0, 0, 1,
        0.43, 0.178, 4,      1, 0, 0,    0, 0, 1,
        0.62, 0.182, 4,      1, 0, 0,    0, 0, 1,

        0.43, 0.178, 5,      1, 0, 0,    0, 0, 1, // 152
        0.605, 0.158, 5,      1, 0, 0,    0, 0, 1,
        0.605, 0.158, 4,      1, 0, 0,    0, 0, 1,
        0.43, 0.178, 4,      1, 0, 0,    0, 0, 1,

        0.605, 0.158, 5,      1, 0, 0,    0, 0, 1, // 156
        0.405, 0.154, 5,      1, 0, 0,    0, 0, 1,
        0.405, 0.154, 4,      1, 0, 0,    0, 0, 1,
        0.605, 0.158, 4,      1, 0, 0,    0, 0, 1,

        0.405, 0.154, 5,      1, 0, 0,    0, 0, 1, // 160
        0.6, 0.14, 5,      1, 0, 0,    0, 0, 1,
        0.6, 0.14, 4,      1, 0, 0,    0, 0, 1,
        0.405, 0.154, 4,      1, 0, 0,    0, 0, 1,

        0.6, 0.14, 5,      1, 0, 0,    0, 0, 1, // 164
        0.405, 0.132, 5,      1, 0, 0,    0, 0, 1,
        0.405, 0.132, 4,      1, 0, 0,    0, 0, 1,
        0.6, 0.14, 4,      1, 0, 0,    0, 0, 1,

        0.405, 0.132, 5,      1, 0, 0,    0, 0, 1, // 168
        0.585, 0.118, 5,      1, 0, 0,    0, 0, 1,
        0.585, 0.118, 4,      1, 0, 0,    0, 0, 1,
        0.405, 0.132, 4,      1, 0, 0,    0, 0, 1,

        0.585, 0.118, 5,      1, 0, 0,    0, 0, 1, // 172
        0.39, 0.108, 5,      1, 0, 0,    0, 0, 1,
        0.39, 0.108, 4,      1, 0, 0,    0, 0, 1,
        0.585, 0.118, 4,      1, 0, 0,    0, 0, 1,

        0.39, 0.108, 5,      1, 0, 0,    0, 0, 1, // 176
        0.575, 0.094, 5,      1, 0, 0,    0, 0, 1,
        0.575, 0.094, 4,      1, 0, 0,    0, 0, 1,
        0.39, 0.108, 4,      1, 0, 0,    0, 0, 1,

        0.575, 0.094, 5,      1, 0, 0,    0, 0, 1, // 180
        0.38, 0.086, 5,      1, 0, 0,    0, 0, 1,
        0.38, 0.086, 4,      1, 0, 0,    0, 0, 1,
        0.575, 0.094, 4,      1, 0, 0,    0, 0, 1,

        0.38, 0.086, 5,      1, 0, 0,    0, 0, 1, // 184
        0.565, 0.074, 5,      1, 0, 0,    0, 0, 1,
        0.565, 0.074, 4,      1, 0, 0,    0, 0, 1,
        0.38, 0.086, 4,      1, 0, 0,    0, 0, 1,

        0.565, 0.074, 5,      1, 0, 0,    0, 0, 1, // 188
        0.37, 0.068, 5,      1, 0, 0,    0, 0, 1,
        0.37, 0.068, 4,      1, 0, 0,    0, 0, 1,
        0.565, 0.074, 4,      1, 0, 0,    0, 0, 1,

        0.37, 0.068, 5,      1, 0, 0,    0, 0, 1, // 192
        0.55, 0.052, 5,      1, 0, 0,    0, 0, 1,
        0.55, 0.052, 4,      1, 0, 0,    0, 0, 1,
        0.37, 0.068, 4,      1, 0, 0,    0, 0, 1,

        0.55, 0.052, 5,      1, 0, 0,    0, 0, 1, // 196
        0.36, 0.052, 5,      1, 0, 0,    0, 0, 1,
        0.36, 0.052, 4,      1, 0, 0,    0, 0, 1,
        0.55, 0.052, 4,      1, 0, 0,    0, 0, 1,

        0.36, 0.052, 5,      1, 0, 0,    0, 0, 1, // 200
        0.53, 0.034, 5,      1, 0, 0,    0, 0, 1,
        0.53, 0.034, 4,      1, 0, 0,    0, 0, 1,
        0.36, 0.052, 4,      1, 0, 0,    0, 0, 1,
    ];

    var indices = [
        // Number 1
        0, 1, 2,        0, 2, 3, 
        4, 5, 6,        4, 6, 7,
        8, 9, 10,       8, 10, 11,
        12, 13, 14,     12, 14, 15,
        16, 17, 18,     16, 18, 19,
        20, 21, 22,     20, 22, 23,
        24, 25, 26,     24, 26, 27,
        28, 29, 30,     28, 30, 31,
        32, 33, 34,     32, 34, 35,
        36, 37, 38,     36, 38, 39,
        40, 41, 42,     40, 42, 43,

        // Number 7
        44, 45, 46,      44, 46, 47,
        48, 49, 50,      48, 50, 51,
        52, 53, 54,      52, 54, 55,
        56, 57, 58,      56, 58, 59,
        60, 61, 62,      60, 62, 63,
        64, 65, 66,      64, 66, 67,
        68, 69, 70,      68, 70, 71,
        72, 73, 74,      72, 74, 75,
        76, 77, 78,      76, 78, 79,
        80, 81, 82,      80, 82, 83,
        84, 85, 86,      84, 86, 87,
        88, 89, 90,      88, 90, 91,
        92, 93, 94,      92, 94, 95,
        96, 97, 98,      96, 98, 99,
        100, 101, 102,      100, 102, 103,
        104, 105, 106,      104, 106, 107,
        108, 109, 110,      108, 110, 111,
        112, 113, 114,      112, 114, 115,
        116, 117, 118,      116, 118, 119,
        120, 121, 122,      120, 122, 123,
        124, 125, 126,      124, 126, 127,
        128, 129, 130,      128, 130, 131,
        132, 133, 134,      132, 134, 135,
        136, 137, 138,      136, 138, 139,
        140, 141, 142,      140, 142, 143,
        144, 145, 146,      144, 146, 147,
        148, 149, 150,      148, 150, 151,
        152, 153, 154,      152, 154, 155,
        156, 157, 158,      156, 158, 159,
        160, 161, 162,      160, 162, 163,
        164, 165, 166,      164, 166, 167,
        168, 169, 170,      168, 170, 171,
        172, 173, 174,      172, 174, 175,
        176, 177, 178,      176, 178, 179,
        180, 181, 182,      180, 182, 183,
        184, 185, 186,      184, 186, 187,
        188, 189, 190,      188, 190, 191,
        192, 193, 194,      192, 194, 195,
        196, 197, 198,      196, 198, 199,
        200, 201, 202,      200, 202, 203,
    ];

    console.log(indices.length);

    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

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
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
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
        // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.4);             // 40% intensity
        // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [0.0, 0.0, 4.8]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
        // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown (event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp (event) {
        dragging = false;
    }
    function onMouseMove (event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
        // KEYBOARD
    function onKeyDown (event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp (event) {
        direction = "";
    }
    function onKeyPress (event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
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
    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.001;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
        
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, 306, gl.UNSIGNED_SHORT, 0);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}