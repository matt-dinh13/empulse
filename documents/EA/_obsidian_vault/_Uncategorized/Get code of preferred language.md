---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878431
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Get code of preferred language

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This element describes the algorithm of getting the code of preferred language for respective operation on particular application.

Input:

	
- Application - parent object of loan application for respective operation


Output:

	
- PreferredLanguageCode - code of preferred language


Steps:

	
- If initiated from the application form, system tries to get the preferred language from respective Preferred Language field. When successful, system returns the relevant language code (i.e. Language[.Value = found preferred language].Code) and algorithm ends.
	
- System tries to get the code of client's first preferred language from the Application received on the input (i.e. Temporary_Application[= Application]->TempAppl_Preferred_Language[.Preference_Order = 0]->Language.Code). When available, system returns it and algorithm ends.
	
- System returns the code of default system language defined in parameter (parameters.properties) DefaultPreferredLanguage. Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[01.090 Generate verification code for contact validation (UseCase 1821372)]]
- ← Dependency: [[01.092 Cancel contact validation (UseCase 1821369)]]
