---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)"
domain: "Modules"
element_id: 815969
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Determinate a result code for output JMS message from RESULT190

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)

## 📝 Notes

Input:

	
- result code
	
- JMS message name


Algorithm:
The system finds a record in CommResultTransformation where 
   ResultCode = passed result code AND JMSMessageName = passed JMS message name

Output:

	
- found JMS Message Result Code  ...string

## 🔗 Connections (1)

- ← Dependency: [[Generating SaleContractResponse]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-2205 - OBS interface - Operations on contract (CEL)
- Custom: Business rules
- Logical: Contract sale - Communication model
