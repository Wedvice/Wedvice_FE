(async () => {
  const StyleDictionaryModule = await import('style-dictionary'); // 동적 import
  const { makeSdTailwindConfig } = await import('sd-tailwindcss-transformer');

  const sdConfig = makeSdTailwindConfig({
    type: 'all',
    source: ['./tokens.json'], // 경로 수정
    buildPath: '',
  });

  // StyleDictionary 객체를 직접 초기화하여 사용
  const StyleDictionaryInstance = new StyleDictionaryModule.default(sdConfig);
  StyleDictionaryInstance.buildAllPlatforms();
})();
