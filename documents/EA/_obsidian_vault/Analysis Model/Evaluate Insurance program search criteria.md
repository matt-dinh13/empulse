---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/User Interface"
domain: "Analysis Model"
element_id: 1501356
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Evaluate Insurance program search criteria

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/User Interface

## 📝 Notes

Insurance Program code:

	
- User must enter whole match code. System compares lower cased strings. (Service.Code)

Name:

	
- System compares lower cased strings (substring). (InsuranceProgram.Name)

Salesroom:

	
- System compares entered string. (InsuranceProgram.Salesroom)

Valid on:

	
- If this date is specified then search finds insurance programs where InsuranceProgram.ValidFrom <= entered.ValidOn and (InsuranceProgram.ValidTo >= entered.ValidOn or InsuranceProgram.ValidTo is empty)

Version activated from:

	
- If this date is specified then search finds insurance programs where InsuranceProgram.VersionActivationDate >= entered.VersionActivatedFrom

Version activated to:

	
- If this date is specified then search finds insurance programs where InsuranceProgram.VersionActivationDate <= entered.VersionActivatedTo


For search by substring is used the rule Search by substring in versioned entities in Product Catalogue.

## 🔗 Connections (2)

- → Dependency: [[Search by substring in versioned entities in Product Catalog]]
- ← Dependency: [[08.570 Search for Insurance Program (UseCase 1517626)]]

## 📊 Appears In (3 diagrams)

- Custom: Search for Insurance Program
- Custom: Validation Rules
- Use Case: Manage Insurance Program
