---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Interface model"
domain: "Analysis Model"
element_id: 1327990
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizationTrancheDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Interface model

## 🔗 Connections (3)

- → Dependency: [[SecuritizedContractListDto]]
- ← Dependency: [[ContractSecuritizationImportFile]]
- → Dependency: [[TrancheHeader]]

## 📊 Appears In (1 diagrams)

- Logical: Contract securitization - file structure 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| trancheHeader | trancheHeader |  |
| contracts | SecuritizedContractListDto |  |
