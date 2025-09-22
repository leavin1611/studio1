'use server';
/**
 * @fileOverview A Genkit flow that generates hazard hotspots based on report volume, keyword frequency, and verified incidents.
 *
 * - generateHazardHotspots - A function that generates hazard hotspots.
 * - GenerateHazardHotspotsInput - The input type for the generateHazardHotspots function.
 * - GenerateHazardHotspotsOutput - The return type for the generateHazardHotspots function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHazardHotspotsInputSchema = z.object({
  reportVolume: z
    .number()
    .describe('The volume of reports in a given area.'),
  keywordFrequency: z
    .number()
    .describe('The frequency of hazard-related keywords in reports and social media.'),
  verifiedIncidents: z
    .number()
    .describe('The number of verified incidents in a given area.'),
  socialMediaSentiment: z
    .string()
    .describe('The overall sentiment expressed in social media posts related to the hazard.'),
});
export type GenerateHazardHotspotsInput = z.infer<typeof GenerateHazardHotspotsInputSchema>;

const GenerateHazardHotspotsOutputSchema = z.object({
  hotspotScore: z
    .number()
    .describe('A score indicating the severity of the hazard hotspot.'),
  recommendedAction: z
    .string()
    .describe('A recommended action for disaster managers based on the hotspot score.'),
  justification: z
    .string()
    .describe('Justification for the recommended action based on the input data.'),
});
export type GenerateHazardHotspotsOutput = z.infer<typeof GenerateHazardHotspotsOutputSchema>;

export async function generateHazardHotspots(input: GenerateHazardHotspotsInput): Promise<GenerateHazardHotspotsOutput> {
  return generateHazardHotspotsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHazardHotspotsPrompt',
  input: {schema: GenerateHazardHotspotsInputSchema},
  output: {schema: GenerateHazardHotspotsOutputSchema},
  prompt: `You are a disaster management expert tasked with identifying hazard hotspots and recommending actions.

  Based on the following data, determine a hotspot score (0-100) and recommend an action for disaster managers. Provide a justification for your recommendation.

  Report Volume: {{{reportVolume}}}
  Keyword Frequency: {{{keywordFrequency}}}
  Verified Incidents: {{{verifiedIncidents}}}
  Social Media Sentiment: {{{socialMediaSentiment}}}

  Consider the following:
  - Higher report volume, keyword frequency, and verified incidents should increase the hotspot score.
  - Negative social media sentiment should also increase the hotspot score.
  - The hotspot score should guide the recommended action (e.g., low score = monitor, medium score = investigate, high score = deploy resources).

  Output the hotspot score, recommended action, and justification in the specified JSON format.`,
});

const generateHazardHotspotsFlow = ai.defineFlow(
  {
    name: 'generateHazardHotspotsFlow',
    inputSchema: GenerateHazardHotspotsInputSchema,
    outputSchema: GenerateHazardHotspotsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
