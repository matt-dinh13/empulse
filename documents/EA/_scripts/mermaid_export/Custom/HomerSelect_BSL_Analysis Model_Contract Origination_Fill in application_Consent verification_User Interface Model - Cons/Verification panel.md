# Verification panel

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification
- **Diagram ID**: 158048
- **Elements**: 11
- **Connectors**: 3

```mermaid
graph TD
    n_01_145_Generate_verification_code_for_consent_validation["01.145 Generate verification code for consent validation"]
    n_01_147_Reset_consent_validation["01.147 Reset consent validation"]
    n_01_146_Validate_verification_code_for_consent["01.146 Validate verification code for consent"]
    MOD_Reset_verification["{MOD}Reset verification"]
    Verify_code["Verify code"]
    Verification_code["Verification code"]
    Result["Result"]
    Countdown["Countdown"]
    Generate_verification_code["Generate verification code"]
    Verification_contact["Verification contact"]
    MOD_OTP_consent_verification["{MOD}OTP consent verification"]
    Generate_verification_code -->|unnamed| n_01_145_Generate_verification_code_for_consent_validation
    Verify_code -->|unnamed| n_01_146_Validate_verification_code_for_consent
    MOD_Reset_verification -->|unnamed| n_01_147_Reset_consent_validation
```
