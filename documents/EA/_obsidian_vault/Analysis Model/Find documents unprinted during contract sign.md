---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model"
domain: "Analysis Model"
element_id: 1879419
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Find documents unprinted during contract sign

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model

## 📝 Notes

Input:
Contract

Output:
List of unprinted documents generated during contract sing

Description:

	
- System finds Product Profile for passed Contract as Contract->Offer Financial Parameters->Product->Product Profile
	
- System finds all existing Documents for Contract
	
- System gets all required document types for Contract according to documentation configuration: Product Profile->Product Profile 2 Documentation Configuration->Documentation Configuration->Product Profile Document Rule (Product Profile 2 Document Type)->Document Type where Product Profile Document Rule.When Required = 'CS' (Contract Sign)
	
- System excludes document types for which a document has been found in step 2
	
- System returns a list of document types

## 🔗 Connections (2)

- ← Dependency: [[Reprint documents unprinted during signiture]]
- ← Dependency: [[{MOD}01.183 Print documents for contract sign]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract signing
