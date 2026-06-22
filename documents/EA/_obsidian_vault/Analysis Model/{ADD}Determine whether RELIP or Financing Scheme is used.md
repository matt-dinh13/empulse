---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model"
domain: "Analysis Model"
element_id: 1879421
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Determine whether RELIP or Financing Scheme is used

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model

## 📝 Notes

{ADD CLM-1063 /}
The rule describes how system determines whether RELIP service or Financing scheme is used on the contract. Only one of those functions may be used in a time. 
(Note: This is only temporary solution until RELIP service is completely abandoned and replaced by Financing Scheme.)

Input: 

	
- contract - Contract


Output:

	
- Result - Transaction RELIP code or Account Transaction Code or null


Steps: 

	
- Check Contract -> Financial Parameters.Financing Scheme Variant Number
	
- Check Contract -> Contract Service -> Service - Service Type.Code = "RELIP"
	
- Evaluate Financing Scheme Variant Number and "RELIP" service accordingly
- if Financing Scheme Variant Number is set and NO "RELIP" service on contract
   exists then set Result = Financial Parameters.Account Transaction Code
- if Financing Scheme Variant Number is NOT set and "RELIP" service on contract
   exists then set Result = Offer RELIP Service Variant.Transaction RELIP Code
- else set Result = null
	
- Return Result

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract signing
