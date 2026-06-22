---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic"
domain: "Requirements Model"
element_id: 1878270
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement #3 - Call LAP in Sign contract externally

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic

## 📝 Notes

Call LAP asynchronously (via RabbitMQ) to process the photo comparison.

Waiting for the photo comparison result. Timeout 5 mins.

In case of the photo comparison failure:  

	
- New error message

In case of the photo comparison success: 

	
- selfie added as client document


	
- agreement regeneration (same as for OTP sign) - selfie to be part of the datasource


	
- set attribute sign method with new value "SELFIE" to the contract documents

## 🔗 Connections (4)

- ← Realisation: [[{MOD}DocumentType]]
- ← Realisation: [[{MOD}01.187 Sign contract]]
- ← Realisation: [[{MOD}01.099 Sign contract externally]]
- ← Realisation: [[{MOD}Save signing method for documents signed paperlessly]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic
