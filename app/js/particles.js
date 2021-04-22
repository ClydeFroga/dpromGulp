function main() {
    const canvas = document.querySelector('.canvas');
    const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
    // renderer.setClearColor( 0x000000, 0 ); // прозрачный фон


    const geometry = new THREE.InstancedBufferGeometry();

// positions
    const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
    positions.setXYZ(0, -0.5, 0.5, 0.0);
    positions.setXYZ(1, 0.5, 0.5, 0.0);
    positions.setXYZ(2, -0.5, -0.5, 0.0);
    positions.setXYZ(3, 0.5, -0.5, 0.0);
    geometry.addAttribute('position', positions);

// uvs
    const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
    uvs.setXYZ(0, 0.0, 0.0);
    uvs.setXYZ(1, 1.0, 0.0);
    uvs.setXYZ(2, 0.0, 1.0);
    uvs.setXYZ(3, 1.0, 1.0);
    geometry.addAttribute('uv', uvs);

// index
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([ 0, 2, 1, 2, 3, 1 ]), 1));


    const indices = new Uint16Array(this.numPoints);
    const offsets = new Float32Array(this.numPoints * 3);
    const angles = new Float32Array(this.numPoints);

    for (let i = 0; i < this.numPoints; i++) {
        offsets[i * 3 + 0] = i % this.width;
        offsets[i * 3 + 1] = Math.floor(i / this.width);

        indices[i] = i;

        angles[i] = Math.random() * Math.PI;
    }

    geometry.addAttribute('pindex', new THREE.InstancedBufferAttribute(indices, 1, false));
    geometry.addAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 3, false));
    geometry.addAttribute('angle', new THREE.InstancedBufferAttribute(angles, 1, false));


}

main();




