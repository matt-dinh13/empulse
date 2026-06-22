---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio/LOR-9704 Application detail: select target type for disbursement"
domain: "Requirements Model"
element_id: 1784394
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9704 Application detail: select target type for disbursement

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio/LOR-9704 Application detail: select target type for disbursement

## 📝 Notes

As a user, I will be able to select party to which the disbursement will be done.

Solution proposal

There will be new setting of disbursement method within salesroom (in HomeSIS):
 

	
- new setting of disbursement channel on salesroom
- new attribute disbursementChannels.targetType (https://homesis.ph00c1.ph.infra/homesis/restful/swagger-ui.html#/salesroom-rest-controller/getSalesroomUsingGET)
	
- based on this setting system will show new dropdown in AF with possible values
- if there is no value, behavior as-is
- if there is only one value it is preselected
- if there are multiple value, user will select manually


	
- when storing payment channel via API
- integrate to new version 4 of payment channels (https://bsl.in00a1.cz.infra/bsl/openapi/swagger-ui.html#/Payment%20Channel%20Endpoint%20v4/createAndValidateUsingPOST_1)

## 🔗 Connections (1)

- → Realisation: [[LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio (Requirement 1787323)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9704 Application detail: select target type for disbursement
