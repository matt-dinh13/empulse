---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433094
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Customization for application

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

The application form is prepared as a customization per country - each country can decide how many types of application form (AF) configuration will be used (type of AF is defined on the product profile level) and which sections, panels, attributes and validations shall be used on particular types of the AF. 

Based on the setting, the application form can be filled in one step or two step. Within one step process, whole AF is filled at once. The two step process AF consists of:

- 1st Block of Data (1BoD) which usually contains the client identification data and other information needed for pre-approval
- 2nd Block of Data (2BoD) which contains mainly information needed for the main approval and additional information needed for processing of the particular contract (e.g. for consumer loans is usually present the Commodity section for specification of goods financed by the loan, for Revolving loans is usually present Card section with possibility to specify the card delivery, for Cash loan is present panel for specifying the mean of money disbursement). 

## AF Sections and panels
The country AF is based on the product (general) application form, which supports following sections, panels and functionalities:

- **Header** contains information about a seller place including address and information about product offer (if already chosen). The header is read-only and always automatically expanded (but can be collapsed by the user).  
- **Queue control panel** enabling: 
	- to record the time and type of contact to be used for 2BoD filling  
	- switch the AF from FO to BO and vice versa
	- reschedule the appointment for 2BoD filling
	- cancel contract
- **Personal information** section contains following panels:
	- Personal data - personal data and a possibility to capture client's fingerprint (using the Fingerprint Client)
	- Primary identification documents - primary identification documents with a possibility to add missing identification documents, to take a photo of document and/or of the client or upload a scan. It contains also an overview of necessary documents to be collected.
	- Client consent - Client's consent with a possibility to generate the personalized consent and upload a scan of the signed consent. It is possible to have more consent types on AF. It is also possible to sign the consent on the application via OTP (to avoid situations when SA lost the consent in case of rejected or canceled application).
	- Contact to client
	- Client contact verification - a possibility to process OTP verification of entered mobile phone number
	- Primary contact address - the address structure can be country specific
	- Secondary contact address
	- Contact to Sales agent
	- Additional personal data
- **Contact information** section enabling to enter some additional related persons.
- **Documents** section enabling to add several other documents provided by the client with a possibility to fill their attributes if defined and take a photo or upload a scan. It contains also an overview of necessary documents to be collected.
- **Employment information** section can contain following panels:
	- Employment
	- Employer/University
	- Employer/University address
	- Monthly income/expenses - panel with information about client's and household income and expenses. Possibility to change product offer parameters (e.g. installment schedule calculation method, preferred day).
	- Financial situation - panel allowing to check financial health of the client
	- Bank account
- **Commodities** section which contains information about commodities to be financed by the loan and related insurances
- **Insurance** section informing about currently active insurance and enabling to change the insurance on the currently chosen product offer (the insurance is possible to be changed only in terms of switching on/off insurances attached to the particular product).
- **Payment information** section containing information about the loan purpose, the type of repayment (e.g. direct debit or other ways) , disbursement details and card information (type of card and place where it shall be picked-up)
- **Other information** section which contains a possibility to enter a secure internal code, the user comment and some additional information.

## 📊 Appears In (1 diagrams)

- Package: LOR
