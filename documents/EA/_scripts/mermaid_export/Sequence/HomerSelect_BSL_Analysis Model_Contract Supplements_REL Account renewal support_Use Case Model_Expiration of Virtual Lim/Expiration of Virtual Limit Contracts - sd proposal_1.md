# Expiration of Virtual Limit Contracts - sd proposal

```mermaid
sequenceDiagram
    participant External_app as External app
    participant Client as Client
    participant LOR_Application as LOR:Application
    participant AM_Account as AM:Account
    participant CLM_Contract_Supplement as CLM:
Contract Supplement
    participant DSM as DSM
    participant DMS as DMS
    participant PIF as PIF
    participant DWH as DWH
    participant SAS as SAS
    External_app->>External_app: Sequence
    External_app->>Client: AccountExpirationNotification
    LOR_Application->>LOR_Application: Sequence
    LOR_Application->>AM_Account: ActivateAccount
    AM_Account->>AM_Account: SaveExpiryDate
    CLM_Contract_Supplement->>CLM_Contract_Supplement: GenerateSupplementDocuments
    DSM->>CLM_Contract_Supplement: DataSource
    External_app->>DMS: GetAccountRenevalSupplmentDocuments
    LOR_Application->>LOR_Application: Sequence
    Client->>External_app: AcceptRenevalAgreement
    PIF->>External_app: Sequence
    AM_Account->>AM_Account: CalculateExpiryDate
    CLM_Contract_Supplement->>External_app: AccountRenewalDocumentPrepared
    CLM_Contract_Supplement->>DMS: StoreAccountRenewalSupplmentDocuments
    External_app->>CLM_Contract_Supplement: CreateAccountRenewalSupplement
    DMS->>External_app: Sequence
    External_app->>LOR_Application: PrepareCreditDocuments
    AM_Account->>AM_Account: SaveExpiryDate
    External_app->>CLM_Contract_Supplement: Sequence
    DWH->>SAS: ExposeReport
    AM_Account->>CLM_Contract_Supplement: ExpiryDate
    External_app->>PIF: GetCustomerData
    LOR_Application->>AM_Account: CreateAccount
    AM_Account->>CLM_Contract_Supplement: Sequence
    AM_Account->>DWH: ExpiryDateInfo
    Client->>External_app: SignAccountRenevalSupplementDocuments
    AM_Account->>AM_Account: CalculateExpiryDate
    LOR_Application->>External_app: CreditDocPrepared
    CLM_Contract_Supplement->>AM_Account: CalculateExpiryDate
    External_app->>External_app: ShowDataForRenewal
    External_app->>LOR_Application: SignApplication
    External_app->>External_app: ExposeAccountRenewalSupplmentDocuments
    CLM_Contract_Supplement->>CLM_Contract_Supplement: UpdateSupplement
    SAS->>SAS: Sequence
    AM_Account->>DWH: ExpiryDateInfo
    CLM_Contract_Supplement->>CLM_Contract_Supplement: CreateBusinessEvent
    CLM_Contract_Supplement->>CLM_Contract_Supplement: CreateSupplement
    External_app->>External_app: Sequence
    CLM_Contract_Supplement->>External_app: AccountRenewalAccepted
    Client->>External_app: ChangePersonalData
    External_app->>PIF: UpdateCustomer / CreateApplicant
    DWH->>DWH: GenerateReportWithContractToBeExpired
    External_app->>External_app: NotifyClientQuartaRenewed
    Client->>External_app: AskForAccountRenewal
    AM_Account->>LOR_Application: Sequence
    CLM_Contract_Supplement->>AM_Account: AccountRenewalAccepted
    LOR_Application->>LOR_Application: GenerateCreditDoc
    CLM_Contract_Supplement->>DSM: CreateDataSource
    SAS->>External_app: AccountsToBeExpired
```
