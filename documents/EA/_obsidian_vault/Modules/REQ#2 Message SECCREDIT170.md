---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)"
domain: "Modules"
element_id: 821313
diagrams: 1
connections: 5
tags:
  - requirement
  - modules
---

# 📋 REQ#2 Message SECCREDIT170

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)

## 📝 Notes

- comm table SECCREDIT170
	
- new consumed JMS message with SaleContractRequest 



Initial setting of ResultsTransformationEnum:
  Code / Value / Message name / Message Result code
  From sequence / 1000 / SaleContractResponse / OK 
  From sequence / 2000 / SaleContractResponse / UNDEFINED_ERROR

## 🔗 Connections (2)

- ← Dependency: [[Processing SaleContractRequest]]
- ← Dependency: [[Generating SaleContractResponse]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2205 - OBS interface - Operations on contract (CEL)
