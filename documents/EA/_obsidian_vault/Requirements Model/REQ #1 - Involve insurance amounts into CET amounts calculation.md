---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals"
domain: "Requirements Model"
element_id: 1586678
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Involve insurance amounts into CET amounts calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals

## 📝 Notes

Goal of the requirement: CET result calculation will contain insurance premium amounts included the principal and Total CET amount to pay where the insurance premium amounts is deducted. This behaviour will be controlled based on an input parameter (e.g. exclude/include insurance in principal) which is provide by a calling use case. Insurance premium presented as a fee in the installment schedule is not taken into account here.

Proposed solution:

	
- extend EarlyRepaymentResult with new attributes presenting insurance premium amounts
	
- a new input parameter of the current UC 03.070 Calculate early repayment amount
	
- the UC 03.070 gets a list of insurances related to the processed contract (CSI REST service, e.g. https://bsl.id00c1.id.infra/bsl/openapi/v2.0/contractservices/insurance/?contractNumbers=4000016084)
	
- serviceId(s) will be used for getting amounts of all active insurance premiums from contract financial parameters
	
- the obtained premium amounts will be forwarded into ER algorithms and used to update EarlyRepaymentResult


Change in SD marked as IS-998

## 📊 Appears In (1 diagrams)

- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
