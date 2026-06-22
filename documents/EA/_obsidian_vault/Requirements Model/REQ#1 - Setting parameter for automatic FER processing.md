---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4071 (CLM-1708) Full Early Repayment Services Automation"
domain: "Requirements Model"
element_id: 1393864
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Setting parameter for automatic FER processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4071 (CLM-1708) Full Early Repayment Services Automation

## 📝 Notes

Goal of this requirement is to support the full early repayment processing even though no client request exists - i.e. automatically after enough money for the loan repayment is received and paired.
Proposed steps for processing:

	
- On contract signature, system check setting of Service Type Parameter Definition whether it is needed to create a contract service parameter for FER service
	
- If so, system checks Full Early Repayment Service.Automatic Service Processing setting. In case the attribute value is TRUE, system creates parameter by Service Type Parameter Definition
	
- The created Contract Service Parameter will be evaluated by Check and process Early repayment request function.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Calculation of Loan Service parameters]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-4071 (CLM-1708) Full Early Repayment Services Automation
