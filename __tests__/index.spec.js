import { mount } from '@vue/test-utils';
import { add } from '@/plugins/index.js';

describe('足算のテスト', () => {
  it("足算", () => {
    expect(add(10, 6)).toBe(16);
  })
})