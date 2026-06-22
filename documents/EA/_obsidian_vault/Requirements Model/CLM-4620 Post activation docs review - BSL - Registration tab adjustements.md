---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements"
domain: "Requirements Model"
element_id: 1689572
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4620  Post activation docs review - BSL - Registration tab adjustements

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements

## 📝 Notes

New attribute
There is new attribute "Manual check completed" added by CSI as part of https://jira.homecredit.net/jira/browse/CSI-1479 both to BSL and DMS module.

One small change that I did on BSL side was to update attribute sort order to 250 to force it to display as last attribute on document (so it is on same place for all document types).

Registration tab changes
Report mistake button should be now visible also for contract in state Active in any registration status (was hidden when registration status was R (registered)) if user has new right UC01_280_ActiveContract.

There is also now new button for editing contract and client documents. It will open standard modal for editing document attributes.

 Document attributes are rendered on document with changed logic.

already existing behavior:

	
- attributes which were already set to some value (instance of attribute definition)
	
- attributes set as required (with error message if attribute value is not set)


addition logic added:

	
- all attributes from attribute definition related to document type which have visible property set even without value
	
- added special handling of boolean attribute type to be displayed as disabled checkbox similarly to contract document tab
	
- needed rights for edition documents:


contract document - UC01_282, UC01_282_Active

client document - UC01_282, UC01_282_Active

Contract document tab changes
Similarly like on registration tab, attributes are now rendered also when there is attribute definition with visible property set.

Client document tab changes
Similarly like on registration tab, attributes are now rendered also when there is attribute definition with visible property set.

Added special handling of boolean attribute type to be displayed as disabled checkbox similarly to contract document tab.

New rights mapping
These roles gain new access rights UC01_282, UC01_282_Active,  UC01_280, UC01_280_ActiveContract, UC01_275

	
- BO_SPECIALIST
	
- CANCEL_ADMIN
	
- CANCEL_OPERATOR
	
- CLIENT_BLOCK_UNBLOCK
	
- CLIENT_DATA_OPERATOR
	
- MANDATE_OPERATOR
	
- PACKAGE_OPERATOR
	
- REGISTRATION_OPERATOR
	
- REGISTRATION_TL
	
- SECUR_ADMIN


Other changes
Registration tab should be reloaded for any document attribute changes. This was fixed also for editing of DDM document which was there before but it didn't work.

Also check that reporting mistake should refresh the registration tab too.

Check that supplement registration functionality stayed untouched. There were some changes to shared code between contract and supplement registration which should not affect supplement registration.

## 📊 Appears In (1 diagrams)

- Custom: CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements
