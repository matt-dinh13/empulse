---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-14638 (CLM-4433) Cabinet - Contract documents to Central Archive"
domain: "Modules"
element_id: 1799712
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 CLM-4529 Start contract archivation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-14638 (CLM-4433) Cabinet - Contract documents to Central Archive

## 📝 Notes

Job for triggering contracts archivation based on rules:

	
- contract is not flagged as archived
	
- no status change for certain petriod


Contracts archivation:

	
- flag contract as archived
	
- send Kafka ContractArchived, attributes to be added:

            - contract code
            - cuid
            - list of contract documents (uuid)

## 📊 Appears In (1 diagrams)

- Custom: CBL-14638 (CLM-4433) Cabinet - Contract documents to Central Archive
