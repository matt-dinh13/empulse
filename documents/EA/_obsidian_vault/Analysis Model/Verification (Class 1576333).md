---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/OTP - One Time Password/{ADD}Verification REST"
domain: "Analysis Model"
element_id: 1576333
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Verification

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/OTP - One Time Password/{ADD}Verification REST

## 🔗 Connections (3)

- ← Usage: [[Verifications]]
- → Usage: [[VerificationAttempt]]
- ← Dependency: [[GenerateCode]]

## 📊 Appears In (2 diagrams)

- Logical: Generation REST
- Logical: Search REST

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | Long |  |
| status | Request Status |  |
| generatedCode | String |  |
| recipient | String |  |
| validTo | Date |  |
| maxVerificationCount | Integer |  |
| remainingAttempts | Long |  |
| verificationAttempt | VerificationAttempt |  |
