# Screen blueprint: Landing Page

Route: `/`
Purpose: Public marketing and information page introducing FinTrack, its value proposition, and key features. Includes CTAs to Login and Register.
Layout: **marketing-landing**

## Required regions
- **header**: Branding, navigation, and quick access to authentication CTAs. — components: Logo, PrimaryNavigation, LoginCTA, RegisterCTA
- **hero**: Immediate value proposition, visual brand impact, and primary call-to-action. — components: HeroTitle, HeroSubtitle, HeroIllustration, PrimaryCTA, SecondaryCTA
- **features**: Highlight core product features and differentiators. — components: FeatureCard, FeatureIcon, FeatureTitle, FeatureDescription
- **supported-banks**: Communicate supported bank/statement coverage for transparency. — components: SupportedBankBadge, UnsupportedBankTooltip
- **faq**: Address common questions and reduce onboarding friction. — components: FAQAccordion, FAQQuestion, FAQAnswer
- **footer**: Legal, privacy, contact, and secondary navigation. — components: FooterLinks, PrivacyPolicyLink, TermsOfServiceLink, ContactLink, CopyrightNotice

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).