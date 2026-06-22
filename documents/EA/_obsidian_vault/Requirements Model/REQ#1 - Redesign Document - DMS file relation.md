---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics"
domain: "Requirements Model"
element_id: 1688742
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Redesign Document - DMS file relation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics

## 📝 Notes

To support storing of more DMS files for one document the new type of relation has to be created.

Steps:

	
- add a new table Document DMS File is which link Document with DMS File and define FileType (FILE, PRINTOUT), Page Specification (will be used in the next step for specification of page A/B), Archive flag (used for archiving of the DMS file for document)
	
- implement function for filling of the Document DMS File for all new DMS files for Documents (but keep current links in the Document table too)
	
- implement function for using of the Document DMS File for all reading of DMS files for Documents


Filling and reading will be driven by new CLM feature flag useNewDocumentDMSRel.

Data migration:

	
- current data will be migrated before switching on in smaller batches once database structure is implemented (even not used yet), probably by some job
	
- once it will be switched on then the rest of documents (created from the last migration) will be migrated as part of deployment

## 📊 Appears In (1 diagrams)

- Custom: CBL-8156 (CLM-3040) Integration with Inovatrics - redesign document domain (step1)
