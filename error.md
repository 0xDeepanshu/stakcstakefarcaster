Type error: Type 'Uint16Array<ArrayBuffer>' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.
  152 |   for (let i = 0; i < particleCount; i++) {
  153 |     const baseIndex = i * 24;
> 154 |     for (const index of cubeIndices) {
      |                         ^
  155 |       allIndices.push(baseIndex + index);
  156 |     }
  157 |   }