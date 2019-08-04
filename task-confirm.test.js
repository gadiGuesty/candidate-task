import { serializePackageJson } from './App';
import json from '../../public/fixtures/complex-package';
import resp from '../../public/fixtures/result-package';

const mapToObject = (map) => {
  return Array.from(map).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
};

describe('Test Correct function result', () => {
  it('should render the dependencies correctly', () => {
    const dependencies = serializePackageJson(json);
    const result = mapToObject(dependencies);
    expect(result).toEqual(resp);
  });
});


