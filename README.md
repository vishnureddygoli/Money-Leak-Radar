# Money Leak Radar

Production-ready Expo React Native app scaffold with mock services, layered architecture, onboarding, privacy center, and release configuration.

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npm run start`

## Run
- iOS: `npm run ios`
- Android: `npm run android`

## Test
- `npm test`

## Release
1. Update bundle IDs/package in `app.json`.
2. Set `EXPO_PUBLIC_API_BASE_URL` and disable mock mode for production backend.
3. Replace placeholder legal text and public URLs.
4. Build with EAS:
   - `eas build --platform ios --profile production`
   - `eas build --platform android --profile production`
5. Submit:
   - `eas submit --platform ios`
   - `eas submit --platform android`

## Store metadata draft
**App description**
Money Leak Radar helps people identify potential subscription leaks, trial risks, price increases, duplicate services, refund opportunities, and opt-out actions in seconds.

**Keywords**
subscription tracker, savings planner, cancel subscriptions, budget app, trial reminder, leak score

**iOS release notes draft**
Initial release with leak score, dashboard, action center, manual message scan, privacy center, and share card generator.

**Android release notes draft**
First public launch of Money Leak Radar with mock scan engine, urgent action detection, and privacy controls.

**Screenshots checklist**
- Splash and onboarding
- Home dashboard + leak score
- Leak detail + action center
- Manual message scan + opt-out radar
- Privacy center + settings

**Privacy questionnaire checklist**
- Data categories collected listed
- Purpose of collection documented
- Data deletion path included
- No sale of personal data disclosed
- Optional future integrations clearly labeled

## Replace before real launch
- Real API URL and keys
- App identifiers and team owner
- Legal docs and hosted policy URLs
- Production integrations (email/bank/screenshot OCR backends)
- Subscription provider integration
