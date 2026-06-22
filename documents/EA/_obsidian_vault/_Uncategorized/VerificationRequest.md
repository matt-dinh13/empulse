---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1576337
diagrams: 0
connections: 1
tags:
  - class
  - _uncategorized
---

# 🔷 VerificationRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 🔗 Connections (1)

- → Dependency: [[VerificationAttempt (Class 1576329)]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | int |  |
| status | VerificationRequestStatus |  |
| generatedCode | string |  |
| verificationAttempt | VerificationAttempt |  |
