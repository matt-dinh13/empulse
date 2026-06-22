---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL"
domain: "Modules"
element_id: 1881161
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #1 Add visibility Flag in DMS Document Type configuration - pageSpecificaiton

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL

## 📝 Notes

<h3>Requirement description</h3>Document types PHILID_CARD and EPHILID_CARD contain page specifications that are used only in particular business processes. Currently, BSL requires the user to provide photos for each page specification (i.e. based on the setting) even though the user is not able to provide them in certain process contexts.
As part of the initiative BRPH-2589 – Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL, the business requires that:

	
- Page specification types BACK_PAGE and PSA_SELFIE for document types PHILID_CARD and EPHILID_CARD shall be configurable as not visible in BSL processes.
	
- When a page specification is marked as not visible (isVisible = false):
	
- Application form – the page specification will be hidden when filling in individual document attributes. Submitting the form will ignore the selected page specification and no validation will apply.
	
- Signing agreement – the page specification will be ignored and no validation (for checking existing content) will apply.




	
- 
	
- 




	
- Application detail and contract detail screens are not affected – users can still view and perform standard operations on BACK_PAGE and PSA_SELFIE based on their assigned role/access rights.


DMS part:

	
- Document Type Page Specification structure is extended with a new boolean attribute isVisible.
	
- The GetDocumentType API method returns the isVisible attribute for each pageSpecificationType.
	
- Configuration of PHILID_CARD and EPHILID_CARD is updated: isVisible = false for page specifications with code BACK_PAGE and PSA_SELFIE.

## 📊 Appears In (1 diagrams)

- Custom: CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL
