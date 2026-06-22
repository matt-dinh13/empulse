---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL"
domain: "Requirements Model"
element_id: 1881463
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL

## 📝 Notes

Requirement descriptionDocument types PHILID_CARD and EPHILID_CARD contain page specifications that are used only in particular business processes. Currently, BSL requires the user to provide photos for each page specification (i.e. based on the setting) even though the user is not able to provide them in certain process contexts.
As part of the initiative BRPH-2589 – Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL, the business requires that:

	
- Page specification types BACK_PAGE and PSA_SELFIE for document types PHILID_CARD and EPHILID_CARD shall be configurable as not visible in BSL processes.
	
- When a page specification is marked as not visible (isVisible = false):
	
- Application form – the page specification will be hidden when filling in individual document attributes. Submitting the form will ignore the selected page specification and no validation will apply.
	
- Signing agreement – the page specification will be ignored and no validation (for checking existing content) will apply.


	
- Application detail and contract detail screens are not affected – users can still view and perform standard operations on BACK_PAGE and PSA_SELFIE based on their assigned role/access rights.


BSL part:

	
- Document Type Page Specification logical data model in BSL is extended with the Visible Flag attribute.
	
- BSL reads and correctly handles the isVisible flag received from DMS API.
	
- Page specifications with isVisible = false are hidden in the application form and ignored during validation.
	
- Page specifications with isVisible = false are ignored during signing agreement validation.



(NOTE: same config cahnge was done in DMS)

## 📊 Appears In (1 diagrams)

- Custom: CBL-30573 (CSI-4586) Hide and Set Optional “Back Page” and “PSA Selfie” Specification Type in BSL
