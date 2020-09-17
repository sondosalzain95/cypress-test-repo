class CreateNewUserAPIRequest {

    createNewUser = (fullName: string, userLogin: string, password: string, email: string) => {
        cy.request({
            failOnStatusCode: false,
            method: "POST",
            url: Cypress.config("baseUrl") + "/ServiceStack/Users",
            body: {
                userId: "10aec560-b9d7-44ad-9d9b-4e44c433fe75",
                user: {
                    AccessMode: 0,
                    ActiveDirectoryGuid: null,
                    AllReports: false,
                    BusinessUnitId: "00000000-0000-0000-0000-000000000000",
                    CALType: 0,
                    CalendarId: null,
                    CreatedBy: null,
                    CreatedOn: "1/1/0001 12:00:00 AM",
                    CreatedOnBehalfBy: null,
                    DefaultDashboard: null,
                    DefaultFiltersPopulated: false,
                    DefaultPage: null,
                    DisabledReason: null,
                    DisplayInServiceViews: null,
                    DomainName: null,
                    EmailRouterAccessApproval: 0,
                    EmployeeId: null,
                    ExchangeRate: null,
                    FirstName: null,
                    FullAccess: false,
                    FullName: fullName,
                    GovernmentId: null,
                    HomePhone: null,
                    Id: "00000000-0000-0000-0000-000000000000",
                    ImportSequenceNumber: null,
                    IncomingEmailDeliveryMethod: 0,
                    InternalEMailAddress: email,
                    InviteStatusCode: null,
                    IsActiveDirectoryUser: false,
                    IsDisabled: null,
                    IsIntegrationUser: false,
                    IsLicensed: false,
                    IsServiceProvider: false,
                    IsSyncWithDirectory: false,
                    JobTitle: null,
                    LastName: null,
                    MiddleName: null,
                    MobileAlertEMail: null,
                    MobilePhone: null,
                    ModifiedBy: null,
                    ModifiedOn: "1/1/0001 12:00:00 AM",
                    ModifiedOnBehalfBy: null,
                    NickName: null,
                    OrganizationId: "00000000-0000-0000-0000-000000000000",
                    OutgoingEmailDeliveryMethod: 0,
                    OverriddenCreatedOn: null,
                    ParentSystemUserId: null,
                    PassportHi: null,
                    PassportLo: null,
                    PersonalEMailAddress: null,
                    PhotoUrl: null,
                    PreferredAddressCode: null,
                    PreferredEmailCode: null,
                    PreferredPhoneCode: null,
                    QueueId: null,
                    Salutation: null,
                    ServiceProvider: 0,
                    ServiceProviderType: 1,
                    SetupUser: false,
                    SiteId: null,
                    Skills: null,
                    TempId: "829b0e4a-b52d-11fb-aa93-3f57596cf248",
                    TerritoryId: null,
                    TimeZoneRuleVersionNumber: null,
                    Title: null,
                    TransactionCurrencyId: null,
                    UTCConversionTimeZoneCode: null,
                    VersionNumber: null,
                    WindowsLiveID: null,
                    YomiFirstName: null,
                    YomiFullName: null,
                    YomiLastName: null,
                    YomiMiddleName: null,
                    availableToAllLocations: false,
                    dm_AllReports: 0,
                    dm_AvailableToAllLocations: 0,
                    dm_EmailOutGoingMailServer: null,
                    dm_EmailPassword: "R3656wp",
                    dm_EmailPort: null,
                    dm_EmailSSL: 0,
                    dm_Inactive: null,
                    dm_Location: "d82ecbbb-d055-4b0f-924a-99c492681490",
                    dm_Login: userLogin,
                    dm_LoginPassword: password,
                    dm_Newfeature: null,
                    dm_R365: 0,
                    dm_Theme: null,
                    dm_changePassword: 0,
                    id: null,
                    isServiceProvider: false,
                    userLocations: [],
                    userReportRole: [],
                    userRoles: [],
                },
            },
            headers: { Referer: Cypress.config("baseUrl") },
        });
    };
}
export default CreateNewUserAPIRequest;