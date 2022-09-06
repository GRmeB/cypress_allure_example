import { configCommon } from './cypress_base';
import { defineConfig } from 'cypress';

const config = configCommon;
// @ts-ignore
config.sites = [
    {
        language: 'com',
        sites: [
            {
                id: '1',
                baseUrl: 'https://www.github.com/',
                url: 'https://www.github.com/',
                name: 'GITHUB',
            },
        ],
    },
];

export default defineConfig(config);
