import { getEnv, getConfig } from '../config';
import { ExamplePO } from '../pages/example.po';

const config = getConfig();

const examplePO: ExamplePO = new ExamplePO();

fixture('Example')
  .meta('env', getEnv())
  .page(config.siteUrl);

test('Should greet user with Example', async (t) => {
  console.log(`Checking ${config.siteUrl}`);
  await t
    .expect(examplePO.header.visible).ok()
    .expect(examplePO.header.textContent).contains('Example');
});
