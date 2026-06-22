---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1879422
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Validate card account status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system validates, whether the selected internal card account has been already activated or not.

Input:

	
- AccountNumber = number of the card account
	
- CUID = client's unique identifier


Output:

	
- AccountStatusValid = indication (boolean), whether the card account's status validation was successful or not
	
- ErrorMessage (optional) = error message describing the particular technical issues, that occurred during the performed steps


Steps:

	
- System takes the CUID from the input and gets the list of all active card accounts related to the corresponding customer by calling theGetAccountListRequest (method of AccountManagementWS) with following input parameters:
   - criteria.*
      - cuid = CUID
      - statuses = 'AC'
If calling the service fails due to any reason, algorithm ends with AccountStatusValid = FALSE and ErrorMessage = 'MSG_CABUS_UNAVAILABLE' returned on the output.
	
- System receives the GetAccountListResponse - in case there is an account with number matching the AccountNumber from the input returned within such response (i.e. GetAccountListResponse.accounts[.number=AccountNumber] exists), system returns AccountStatusValid = TRUE on the algorithm's output. Otherwise AccountStatusValid = FALSE is returned instead.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.187 Sign contract]]
