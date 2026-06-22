---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights"
domain: "Analysis Model"
element_id: 1878514
diagrams: 4
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.183 Print documents for contract sign

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Access Rights

## 📝 Notes

This use case serves for a printing a documents which should be printed automatically during contract signature. It is used as a included use case from
the use case 01.180 Sign contract and 01.099 Sign contract externally, or it may be too invoked by the user from the Contract detail screen or mBean printContractDocuments.  
Besides the printing it performs uploading a documents to the archiving system.

## 🔗 Connections (7)

- ← Dependency: [[Reprint documents unprinted during signiture]]
- → Dependency «invokes»: [[01.009 Upload file to document archive (UseCase 1851469)]]
- → Realisation: [[01.183 Print documents for contract sign]]
- → Dependency: [[Find documents unprinted during contract sign]]
- → Dependency: [[Generate printout of document]]
- ← Dependency: [[{MOD}Sign contract finalization]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-13715 (CLM-4506) Change data source for printing documents during contract sign
- Custom: Panel of buttons
- Use Case: Contract signing
