---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio/LOR-9699 AF: Beneficiary panel"
domain: "Requirements Model"
element_id: 1781265
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9699 AF: Beneficiary panel

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio/LOR-9699 AF: Beneficiary panel

## 📝 Notes

As a user, I will be able to fill in beneficiary data, if beneficiary person or contract is selected.

Proposed solution:

Once beneficiary is selected  in field Target type, system will display panel for collecting beneficiary information. Fields:

	
- Name - display fields first name, middle name and lastname (Note: there is a different label for beneficiary person (beneficiary name) vs. beneficiary company (representative name))
	
- Phone number - validation and behavior (e.g. masking) as primary mobile
	
- ID number - validation and behavior as document number ID_CARD (Note: there is no relation to document entity in DMS)
	
- address panel - validation and behavior as permanent/contact address.


Data to be stored in PIF as related person of applicant:

	
- relation type = OTHER
	
- relatedPersonInfos.customValue.beneficiaryPersonYn = TRUE
	
- possibly new mapping - address fields, document number
	
- name - firstname, middlename and lastname as usual


When identifying/updating client, skip mapping of relatedPersonInfos.customValue.beneficiaryPersonYn = TRUE, i.e. they will not be stored to client entity.

## 🔗 Connections (1)

- → Realisation: [[LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio (Requirement 1787323)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9699 AF: Beneficiary panel
