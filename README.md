# SamudraSetu - Crowdsourced Ocean Hazard Reporting

This is a Next.js project created in Firebase Studio. It's a comprehensive platform for crowdsourcing, visualizing, and analyzing ocean hazard information to protect coastal communities.

## Project Summary

**SamudraSetu** is an AI-driven platform designed to bridge the gap in coastal safety by creating a unified intelligence loop. It addresses the problems of misinformation, slow reporting, and disconnected data by leveraging cutting-edge AI at every step.

### The Problem: A Disconnected & Reactive System

Current hazard reporting is chaotic and slow. It relies on a fragmented mix of:
1.  **Public Panic:** Unverified social media posts that spread quickly, often containing misinformation and causing public confusion.
2.  **Manual Reporting:** Formal reports from eyewitnesses that are slow to be filed and even slower to be verified by authorities.
3.  **Official Channels:** Limited sensor data that may not capture localized, on-the-ground events in real-time.

This fragmented approach leads to critical delays, unreliable information, and an increased risk to coastal communities.

### Our Solution: The SamudraSetu AI-Powered Intelligence Loop

SamudraSetu transforms this chaotic process into a streamlined, four-stage intelligence loop:

1.  **Report (AI-Assisted):** Citizens and on-ground volunteers act as real-time sensors. When a user uploads a photo of a hazard, our AI (using a **Google Gemini** model) instantly analyzes the image to pre-fill the report form with the identified hazard type, severity, and a detailed description. This makes reporting fast, accurate, and easy.

2.  **Analyze (AI-Verified):** To combat misinformation, every report undergoes a dual-layer analysis.
    *   An AI model (**BERT**, trained on fake news detection) scores the authenticity of the report's text to filter out hoaxes.
    *   Another AI model (**Gemini**) analyzes public social media feeds to gauge public sentiment and identify emerging trends related to the hazard.

3.  **Visualize (A Unified Dashboard):** All verified reports and social media insights are plotted on a single, live map. With features like heatmaps and marker clustering, it provides an immediate and intuitive operating picture for everyone from the public to disaster managers.

4.  **Alert (Actionable Intelligence):** Disaster managers are equipped with a clear, real-time, and verified stream of intelligence. This allows them to move from reacting to chaos to making proactive, data-driven decisions about issuing alerts and deploying resources, ultimately saving lives and property.

### Key Innovations

*   **AI at the Point of Reporting:** Using AI to auto-fill reports from images, not just for backend analysis.
*   **Dual-Layer Authenticity:** Combining AI text analysis with human credibility to create a robust verification system.
*   **Data Fusion:** Uniquely integrating formal crowdsourced reports with unstructured social media intelligence for a complete hazard picture.

## Getting Started Locally

To run this project on your local machine using Visual Studio Code, follow these steps.

### 1. Prerequisites

Make sure you have **Node.js** (which includes **npm**) installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### 2. Unzip and Open Project

1.  Unzip the downloaded project folder.
2.  Open Visual Studio Code, then go to `File > Open Folder...` and select the unzipped project folder.

### 3. Set Up Environment File

The project requires an API key for Google Maps.

1.  In the root of the project, find the `.env` file.
2.  Ensure it contains your Google Maps API key, like so:

    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyAwNOYjQTLk42O-JpKHXGvxkraaMU8Oldc
    ```

### 4. Install Dependencies

Open the integrated terminal in VS Code (`Terminal > New Terminal`) and run this command to install all the required packages:

```bash
npm install
```

### 5. Run the Application

The application requires two services to run at the same time: the Next.js web app and the Genkit AI server. You will need two separate terminals for this.

**Terminal 1: Start the Web App**

In your first terminal, run the following command to start the main application:

```bash
npm run dev
```

Your website will be available at **http://localhost:9002**.

**Terminal 2: Start the AI Server**

Open a second terminal in VS Code (click the `+` icon in the terminal panel). In this new terminal, run the following command to start the AI services:

```bash
npm run genkit:dev
```

This server handles all the AI-powered features, such as image analysis and authenticity scoring. The web app automatically communicates with this server.

You are now all set! Open your browser to `http://localhost:9002` to see your application running.
