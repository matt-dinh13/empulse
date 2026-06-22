---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Interface Provided/Web Services"
domain: "Analysis Model"
element_id: 1750148
diagrams: 2
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}13.500 Find Supplement setting service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Interface Provided/Web Services

## 📝 Notes

{ADD CSI-1777 /}
The use case presents a method for getting Supplement setting based on defined search parameters

Example of the request: GET <BSL_ADDR>/openapi/v1.0/supplements/
{
    "sortBy": "string",
    "order": "string",
    "limit": 0,
    "offset": 0,
    "supplementType": "string",
    "processType""string"
}

## 🔗 Connections (3)

- → Realisation: [[{ADD}13.500 Find Supplement setting service]]
- ← Dependency: [[Supplements (Interface 1750154)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (2 diagrams)

- Logical: Supplement definition - Get Supplement setting
- Use Case: Supplement - Getting Supplement setting
