---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights"
domain: "Analysis Model"
element_id: 1880221
diagrams: 16
connections: 39
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.128 Preview document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights

## 📝 Notes

{DEL CLM-5122/}{ADD CSI-164}
It looks this use case is not used at all. 
Only access right is checked during loading of:

	
- Contract document tab
	
- Client document tab
	
- Registration tab

{/ADD}{/DEL}

This use case enables the user to preview the selected document file (i.e. file uploaded to Cabinet for respective document) either by displaying it in the on-screen viewer or downloading the file to the user's local drive (based on assigned privileges).

## 🔗 Connections (36)

- ← Realisation: [[Document file preview]]
- ← Dependency: [[Document file revisions]]
- ← Dependency: [[Document file revisions (Class 1746122)]]
- ← Realisation: [[Document file preview (Screen 1746130)]]
- ← Dependency: [[Download]]
- → Realisation: [[{ADD}01.128 Preview document printouts (file download)]]
- → Realisation: [[{ADD}01.128 Preview client document (file download)]]
- → Realisation: [[01.128 Preview document]]
- → Realisation: [[{ADD}01.128 Preview client document]]
- → Realisation: [[{ADD}01.128 Preview client document with security level 2 (file download)]]
- → Realisation: [[{ADD}01.128 Preview document (status Signed)]]
- → Realisation: [[{ADD}01.128 Preview document printouts]]
- → Realisation: [[{ADD}01.128 Preview contract document with security level 2 (file download)]]
- → Realisation: [[{ADD}01.128 Preview document printout with security level 1]]
- → Dependency: [[Access control to Document by Contract status]]
- → Realisation: [[{ADD}01.128 Preview document printout with security level 2 (file download)]]
- → Realisation: [[{ADD}01.128 Preview contract document (file download)]]
- → Realisation: [[{ADD}01.128 Preview contract document]]
- → Realisation: [[{MOD}01.128 Preview document (all statuses)]]
- → Realisation: [[{ADD}01.128 Preview registration document (file download)]]
- → Realisation: [[{ADD}01.128 Preview document (status Active)]]
- → Realisation: [[{ADD}01.128 Preview client document with security level 2]]
- → Realisation: [[{ADD}01.128 Preview client document with security level 1]]
- → Dependency: [[{DEL}Getting document's DMS file UUID]]
- → Realisation: [[{ADD}01.128 Preview contract document with security level 2]]
- → Realisation: [[{ADD}01.128 Preview registration document]]
- → Realisation: [[{ADD}01.128 Preview document printout with security level 2]]
- → UseCase «include»: [[01.008 Download file from document archive (UseCase 1851467)]]
- → Realisation: [[{ADD}01.128 Preview client document with security level 1 (file download)]]
- → Realisation: [[{ADD}01.128 Preview contract document with security level 1]]
- → Realisation: [[{MOD}01.128 Preview document (file download)]]
- → Realisation: [[{ADD}01.128 Preview document printout with security level 1 (file download)]]
- → Realisation: [[{MOD}01.128 Preview document (status In Pre-process)]]
- → Realisation: [[{ADD}01.128 Preview contract document with security level 1 (file download)]]
- → Dependency: [[{MOD}Preview documents based on security level]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (16 diagrams)

- Custom: AccessRights
- Custom: CBL-18207 (CLM-5122) Document preview on Registration tab, Contract documents tab, Documents printouts tab
- Custom: CBL-6279 (CLM-2061) New access right for Client Documents
- Custom: CBL-7299 (CLM-2396) RBI Regulation for KYC Docs -To view KYC Docs on every contract
- Custom: CBL-8361 (CLM-2575) Optimize access rights for documents download on affected tabs
- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
- Custom: Client documents - Access Rights
- Custom: COMMON for documents
- Custom: Contract documents - Access Rights
- Custom: DDM documents - Access Rights
- Custom: Document file preview
- Custom: Document page information
- Custom: Document page information
- Custom: Document printouts - Access Rights
- Custom: Document registration form
- Use Case: Document copy management
