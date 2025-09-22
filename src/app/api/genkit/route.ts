// src/app/api/genkit/route.ts
import {createApp} from '@genkit-ai/next';
import * as flows from '@/ai/dev';

export const {GET, POST} = createApp({flows: Object.values(flows)});
