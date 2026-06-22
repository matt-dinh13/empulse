---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages"
domain: "Analysis Model"
element_id: 1804065
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ScoringAdditionalData

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Interface/Generated messages

## 📝 Notes

Additional data returned by BLAZE/LAP as result of CLIP process
A list of keys is chosen based on List of fullpath keys for ScoringAdditionalData rule
Possible other keys are not involved

## 🔗 Connections (2)

- ← Dependency: [[CreditLimitChangeResultData]]
- → Dependency: [[{MOD}List of fullpath keys for ScoringAdditionalData]]

## 📊 Appears In (1 diagrams)

- Logical: Credit Limit Change Request - processing response message

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| value | string |  |
