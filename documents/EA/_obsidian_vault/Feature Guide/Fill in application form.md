---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433083
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Fill in application form

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

Application form is used to gather data about client, which are used for client identification and approval process.

## Input
- application form data

## Output
- application 

## Detail
Application form can be filled in one (1SP) or two steps (2SP) process, which depends on configuration of salesroom and product. One step sales process means that the application is to be filled in once. Two step sales process means that the application is divided in two parts (blocks of data, BoD) which has to be filled separately.  

It is possible to let the system prefill some fields of application form from the CIF if the applicant is successfully found (based on the Initial client search).

During filling of application form user can:

- upload or take photos
- take fingerprints
- verify mobile phone using one time password
- change insurance
- save unfinished application form
- filling of application for by front office (FO) or back office (BO)
- planning of filling the 2 BoD

After application form is filled and submitted, system performs validations. When all validations are successfully passed, system automatically creates required documents (document types assigned to product profile with check moment type AFS). 
Afterwards a request for client identification is sent to CIF. When client is identified (as existing or new), a request for approval is sent to LAP which will determine, if application will be approved or rejected. Optionally alternative offers can be calculated and offered to client.
_Note: system might create scoring documents (document types assigned to product profile with check moment type SRE)._

The 2nd BoD of the application form might have short or full version for one product profile. Which version will be used is based on the decision made in pre-approval (after 1st BoD, by Blaze) and versions of 2nd BoD defined on the particular product profile.

_Note: at present application is represented in BSL as contract entity. This means application form is being submitted, data are stored in Temporary Application structure (as snapshot) and contract entity is created afterwards, which is used in the business process._

## 📊 Appears In (1 diagrams)

- Package: LOR
