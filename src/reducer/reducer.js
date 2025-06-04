// reducer.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_STORE_FAILURE,
  FETCH_STORE_REQUEST,
  FETCH_STORE_SUCCESS,
  CREATE_STORE_FAILURE,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  LOGIN_STORE_REQUEST,
  LOGIN_STORE_SUCCESS,
  LOGIN_STORE_FAILURE,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  PRODUCT_IB_BY_REQUEST,
  PRODUCT_IB_BY_SUCCESS,
  PRODUCT_IB_BY_FAILURE,
  ADDCARD_IB_BY_REQUEST,
  ADDCARD_IB_BY_SUCCESS,
  ADDCARD_IB_BY_FAILURE,
  GET_ADDCARD_IB_BY_REQUEST,
  GET_ADDCARD_IB_BY_SUCCESS,
  GET_ADDCARD_IB_BY_FAILURE,
  DELETE_ADDCARD_IB_BY_REQUEST,
  DELETE_ADDCARD_IB_BY_SUCCESS,
  DELETE_ADDCARD_IB_BY_FAILURE,
  USER_RESPONCE_REQUEST,
  USER_RESPONCE_SUCCESS,
  USER_RESPONCE_FAILURE,
  BRAND_IB_BY_FAILURE,
  REGISITION_STORE_REQUEST,
  REGISITION_STORE_SUCCESS,
  REGISITION_STORE_FAILURE,
  ADMIN_LIST_RESPONCE_REQUEST,
  ADMIN_LIST_RESPONCE_SUCCESS,
  ADMIN_LIST_RESPONCE_FAILURE,
  EDIT_PRODUCT_ID_REQUEST,
  EDIT_PRODUCT_ID_SUCCESS,
  EDIT_PRODUCT_ID_FAILURE,
  DELETE_PRODUCT_ID_REQUEST,
  DELETE_PRODUCT_ID_SUCCESS,
  DELETE_PRODUCT_ID_FAILURE,
  GET_STAFF_LIST_REQUEST,
  GET_STAFF_LIST_SUCCESS,
  GET_STAFF_LIST_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  GET_PROFILE_LIST_REQUEST,
  GET_PROFILE_LIST_SUCCESS,
  GET_PROFILE_LIST_FAILURE,
  GET_COUPON_LIST_REQUEST,
  GET_COUPON_LIST_SUCCESS,
  GET_COUPON_LIST_FAILURE,
  GET_EVENTS_LIST_REQUEST,
  GET_EVENTS_LIST_SUCCESS,
  GET_EVENTS_LIST_FAILURE,
  GET_BLOGS_LIST_REQUEST,
  GET_BLOGS_LIST_SUCCESS,
  GET_BLOGS_LIST_FAILURE,
  GET_COUPON_IB_BY_REQUEST,
  GET_COUPON_IB_BY_SUCCESS,
  GET_COUPON_IB_BY_FAILURE,
  ADD_EVENTS_LIST_REQUEST,
  ADD_EVENTS_LIST_SUCCESS,
  ADD_EVENTS_LIST_FAILURE,
  ADD_BLOGS_LIST_REQUEST,
  ADD_BLOGS_LIST_SUCCESS,
  ADD_BLOGS_LIST_FAILURE,
  SUB_BRAND_IB_BY_REQUEST,
  SUB_BRAND_IB_BY_SUCCESS,
  SUB_BRAND_IB_BY_FAILURE,
  ADD_TRACK_LIST_REQUEST,
  ADD_TRACK_LIST_SUCCESS,
  ADD_TRACK_LIST_FAILURE,


  MICROSITE_IB_BY_REQUEST,
  MICROSITE_IB_BY_SUCCESS,
  MICROSITE_IB_BY_FAILURE,
  ADD_MICROSITE_LIST_SUCCESS,
  ADD_MICROSITE_LIST_FAILURE,
  Edit_MICROSITE_LIST_REQUEST,
  Edit_MICROSITE_LIST_SUCCESS,
  Edit_MICROSITE_LIST_FAILURE,
  Delete_MICROSITE_LIST_REQUEST,
  Delete_MICROSITE_LIST_SUCCESS,
  Delete_MICROSITE_LIST_FAILURE,


  MICROSITEDETAIL_IB_BY_REQUEST,
  MICROSITEDETAIL_IB_BY_SUCCESS,
  MICROSITEDETAIL_IB_BY_FAILURE,
  ADD_MICROSITEDETAIL_LIST_SUCCESS,
  ADD_MICROSITEDETAIL_LIST_FAILURE,
  Edit_MICROSITEDETAIL_LIST_REQUEST,
  Edit_MICROSITEDETAIL_LIST_SUCCESS,
  Edit_MICROSITEDETAIL_LIST_FAILURE,
  Delete_MICROSITEDETAIL_LIST_REQUEST,
  Delete_MICROSITEDETAIL_LIST_SUCCESS,
  Delete_MICROSITEDETAIL_LIST_FAILURE,



  FloorPlan_IB_BY_REQUEST,
  FloorPlan_IB_BY_SUCCESS,
  FloorPlan_IB_BY_FAILURE,
  ADD_FloorPlan_LIST_REQUEST,
  ADD_FloorPlan_LIST_SUCCESS,
  ADD_FloorPlan_LIST_FAILURE,
  Edit_FloorPlan_LIST_REQUEST,
  Edit_FloorPlan_LIST_SUCCESS,
  Edit_FloorPlan_LIST_FAILURE,
  Delete_FloorPlan_LIST_REQUEST,
  Delete_FloorPlan_LIST_SUCCESS,
  Delete_FloorPlan_LIST_FAILURE,

  Amenities_IB_BY_REQUEST,
  Amenities_IB_BY_SUCCESS,
  Amenities_IB_BY_FAILURE,
  ADD_Amenities_LIST_REQUEST,
  ADD_Amenities_LIST_SUCCESS,
  ADD_Amenities_LIST_FAILURE,
  Edit_Amenities_LIST_REQUEST,
  Edit_Amenities_LIST_SUCCESS,
  Edit_Amenities_LIST_FAILURE,
  Delete_Amenities_LIST_REQUEST,
  Delete_Amenities_LIST_SUCCESS,
  Delete_Amenities_LIST_FAILURE,

  Specifications_IB_BY_REQUEST,
  Specifications_IB_BY_SUCCESS,
  Specifications_IB_BY_FAILURE,
  ADD_Specifications_LIST_REQUEST,
  ADD_Specifications_LIST_SUCCESS,
  ADD_Specifications_LIST_FAILURE,
  Edit_Specifications_LIST_REQUEST,
  Edit_Specifications_LIST_SUCCESS,
  Edit_Specifications_LIST_FAILURE,
  Delete_Specifications_LIST_REQUEST,
  Delete_Specifications_LIST_SUCCESS,
  Delete_Specifications_LIST_FAILURE,

  SpecificationsDetail_IB_BY_REQUEST,
  SpecificationsDetail_IB_BY_SUCCESS,
  SpecificationsDetail_IB_BY_FAILURE,
  ADD_SpecificationsDetail_LIST_REQUEST,
  ADD_SpecificationsDetail_LIST_SUCCESS,
  ADD_SpecificationsDetail_LIST_FAILURE,
  Edit_SpecificationsDetail_LIST_REQUEST,
  Edit_SpecificationsDetail_LIST_SUCCESS,
  Edit_SpecificationsDetail_LIST_FAILURE,
  Delete_SpecificationsDetail_LIST_REQUEST,
  Delete_SpecificationsDetail_LIST_SUCCESS,
  Delete_SpecificationsDetail_LIST_FAILURE,

  BankApproval_IB_BY_REQUEST,
  BankApproval_IB_BY_SUCCESS,
  BankApproval_IB_BY_FAILURE,
  ADD_BankApproval_LIST_REQUEST,
  ADD_BankApproval_LIST_SUCCESS,
  ADD_BankApproval_LIST_FAILURE,
  Edit_BankApproval_LIST_REQUEST,
  Edit_BankApproval_LIST_SUCCESS,
  Edit_BankApproval_LIST_FAILURE,
  Delete_BankApproval_LIST_REQUEST,
  Delete_BankApproval_LIST_SUCCESS,
  Delete_BankApproval_LIST_FAILURE,

  LegalApproval_IB_BY_REQUEST,
  LegalApproval_IB_BY_SUCCESS,
  LegalApproval_IB_BY_FAILURE,
  ADD_LegalApproval_LIST_REQUEST,
  ADD_LegalApproval_LIST_SUCCESS,
  ADD_LegalApproval_LIST_FAILURE,
  Edit_LegalApproval_LIST_REQUEST,
  Edit_LegalApproval_LIST_SUCCESS,
  Edit_LegalApproval_LIST_FAILURE,
  Delete_LegalApproval_LIST_REQUEST,
  Delete_LegalApproval_LIST_SUCCESS,
  Delete_LegalApproval_LIST_FAILURE,

  Builder_IB_BY_REQUEST,
  Builder_IB_BY_SUCCESS,
  Builder_IB_BY_FAILURE,
  ADD_Builder_LIST_REQUEST,
  ADD_Builder_LIST_SUCCESS,
  ADD_Builder_LIST_FAILURE,
  Edit_Builder_LIST_REQUEST,
  Edit_Builder_LIST_SUCCESS,
  Edit_Builder_LIST_FAILURE,
  Delete_Builder_LIST_REQUEST,
  Delete_Builder_LIST_SUCCESS,
  Delete_Builder_LIST_FAILURE,

  PropStatus_IB_BY_REQUEST,
  PropStatus_IB_BY_SUCCESS,
  PropStatus_IB_BY_FAILURE,
  ADD_PropStatus_LIST_REQUEST,
  ADD_PropStatus_LIST_SUCCESS,
  ADD_PropStatus_LIST_FAILURE,
  Edit_PropStatus_LIST_REQUEST,
  Edit_PropStatus_LIST_SUCCESS,
  Edit_PropStatus_LIST_FAILURE,
  Delete_PropStatus_LIST_REQUEST,
  Delete_PropStatus_LIST_SUCCESS,
  Delete_PropStatus_LIST_FAILURE,

  PropType_IB_BY_REQUEST,
  PropType_IB_BY_SUCCESS,
  PropType_IB_BY_FAILURE,
  ADD_PropType_LIST_REQUEST,
  ADD_PropType_LIST_SUCCESS,
  ADD_PropType_LIST_FAILURE,
  Edit_PropType_LIST_REQUEST,
  Edit_PropType_LIST_SUCCESS,
  Edit_PropType_LIST_FAILURE,
  Delete_PropType_LIST_REQUEST,
  Delete_PropType_LIST_SUCCESS,
  Delete_PropType_LIST_FAILURE,

  MicrositeMetaTag_IB_BY_REQUEST,
  MicrositeMetaTag_IB_BY_SUCCESS,
  MicrositeMetaTag_IB_BY_FAILURE,
  ADD_MicrositeMetaTag_LIST_REQUEST,
  ADD_MicrositeMetaTag_LIST_SUCCESS,
  ADD_MicrositeMetaTag_LIST_FAILURE,
  Edit_MicrositeMetaTag_LIST_REQUEST,
  Edit_MicrositeMetaTag_LIST_SUCCESS,
  Edit_MicrositeMetaTag_LIST_FAILURE,
  Delete_MicrositeMetaTag_LIST_REQUEST,
  Delete_MicrositeMetaTag_LIST_SUCCESS,
  Delete_MicrositeMetaTag_LIST_FAILURE,


  MicrositePrice_IB_BY_REQUEST,
  MicrositePrice_IB_BY_SUCCESS,
  MicrositePrice_IB_BY_FAILURE,
  ADD_MicrositePrice_LIST_REQUEST,
  ADD_MicrositePrice_LIST_SUCCESS,
  ADD_MicrositePrice_LIST_FAILURE,
  Edit_MicrositePrice_LIST_REQUEST,
  Edit_MicrositePrice_LIST_SUCCESS,
  Edit_MicrositePrice_LIST_FAILURE,
  Delete_MicrositePrice_LIST_REQUEST,
  Delete_MicrositePrice_LIST_SUCCESS,
  Delete_MicrositePrice_LIST_FAILURE,


} from "./actions";

const initialState = {
  data: null,
  productlist: null,
  storelist: null,
  loading: false,
  error: null,
  loginerror: null,
  createData: null,
  createerror: null,
  Editcategory: null, // This will store the response data
  loginData: null,
  getprofile: null,
  profileerror: null,
  Ordererror: null,
  getOrder: null,
  ProductIderror: null,
  GetProductId: null,
  ProductIdloading: null,
  addcardIdloading: null,
  GetAddcardRes: null,
  addloading: null,
  GetAddcardUserRes: null,
  Deleteloading: null,
  DeleteAddcardUserRes: null,
  GetBrandId: null,
  GetStorelist: null,
  EditproductbyId: null,
  GetStaffList: null,
  GetProfileList: null,
  addStaffList: null,
  GetEventList: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productlist: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        storelist: action.payload,
      };
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        Editcategory: null,
      };
    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        Editcategory: action.payload, // Update userData with the response data
      };
    case CREATE_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Update error with the error message
        userData: null,
      };
    case LOGIN_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        loginerror: null,
        loginData: null,
      };
    case LOGIN_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        loginerror: null,
        loginData: action.payload, // Update userData with the response data
      };
    case LOGIN_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        loginerror: action.payload, // Update error with the error message
        loginData: null,
      };
    case REGISITION_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        createerror: null,
        createData: null,
      };
    case REGISITION_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        createerror: null,
        createData: action.payload, // Update userData with the response data
      };
    case REGISITION_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        createerror: action.payload, // Update error with the error message
        createData: null,
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getproductlist: null,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getproductlist: action.payload, // Update userData with the response data
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profileerror: action.payload, // Update error with the error message
        getprofile: null,
      };

    case USER_RESPONCE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getUserDatalist: null,
      };
    case USER_RESPONCE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getUserDatalist: action.payload, // Update userData with the response data
      };
    case USER_RESPONCE_FAILURE:
      return {
        ...state,
        loading: false,
        getUserDatalist: action.payload, // Update error with the error message
        getprofile: null,
      };
    case ADMIN_LIST_RESPONCE_REQUEST:
      return {
        ...state,
        loading: true,
        GetStorelist: null,
      };
    case ADMIN_LIST_RESPONCE_SUCCESS:
      return {
        ...state,
        loading: false,
        GetStorelist: action.payload, // Update userData with the response data
      };
    case ADMIN_LIST_RESPONCE_FAILURE:
      return {
        ...state,
        loading: false,
        GetStorelist: action.payload, // Update error with the error message
      };

    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        Ordererror: null,
        getOrder: null,
      };
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        Ordererror: null,
        getOrder: action.payload, // Update userData with the response data
      };
    case ORDER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        Ordererror: action.payload, // Update error with the error message
        getOrder: null,
      };
    case PRODUCT_IB_BY_REQUEST:
      return {
        ...state,
        ProductIdloading: true,
        ProductIderror: null,
        GetProductId: null,
      };
    case PRODUCT_IB_BY_SUCCESS:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: null,
        GetProductId: action.payload, // Update userData with the response data
      };
    case PRODUCT_IB_BY_FAILURE:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        GetProductId: null,
      };
    case EDIT_PRODUCT_ID_REQUEST:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        GetProductId: null,
      };
    case EDIT_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        BrandIdloading: true,
        EditproductbyId: null,
      };
    case EDIT_PRODUCT_ID_FAILURE:
      return {
        ...state,
        BrandIdloading: false,
        EditproductbyId: action.payload, // Update userData with the response data
      };
    case DELETE_PRODUCT_ID_REQUEST:
      return {
        ...state,
        DeleteIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        DeleteProductId: null,
      };
    case DELETE_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        DeleteIdloading: true,
        DeleteProductId: null,
      };
    case DELETE_PRODUCT_ID_FAILURE:
      return {
        ...state,
        DeleteIdloading: false,
        DeleteProductId: action.payload, // Update userData with the response data
      };
    case BRAND_IB_BY_FAILURE:
      return {
        ...state,
        BrandIdloading: false,
        EditproductbyId: null,
      };
    case ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addcardIdloading: true,
        GetAddcardRes: null,
      };
    case ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload, // Update userData with the response data
      };
    case ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload,
      };
    case GET_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addloading: true,
        GetAddcardUserRes: null,
      };
    case GET_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload, // Update userData with the response data
      };
    case GET_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload,
      };
    case DELETE_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        Deleteloading: true,
        DeleteAddcardUserRes: null,
      };
    case DELETE_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload, // Update userData with the response data
      };
    case DELETE_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload,
      };

    case GET_STAFF_LIST_REQUEST:
      return {
        ...state,
        addloading: true,
        GetStaffList: null,
      };
    case GET_STAFF_LIST_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetStaffList: action.payload, // Update userData with the response data
      };
    case GET_STAFF_LIST_FAILURE:
      return {
        ...state,
        addloading: false,
        GetStaffList: action.payload,
      };

    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        addloading: true,
        addStaffList: null,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        addloading: false,
        addStaffList: action.payload, // Update userData with the response data
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        addloading: false,
        addStaffList: action.payload,
      };

    case GET_PROFILE_LIST_REQUEST:
      return {
        ...state,
        addloading: true,
        GetProfileList: null,
      };
    case GET_PROFILE_LIST_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetProfileList: action.payload, // Update userData with the response data
      };
    case GET_PROFILE_LIST_FAILURE:
      return {
        ...state,
        addloading: false,
        GetProfileList: action.payload,
      };
    case GET_COUPON_LIST_REQUEST:
      return {
        ...state,
        GetCoupunList: null,
      };
    case GET_COUPON_LIST_SUCCESS:
      return {
        ...state,
        GetCoupunList: action.payload, // Update userData with the response data
      };
    case GET_COUPON_LIST_FAILURE:
      return {
        ...state,
        GetCoupunList: action.payload,
      };
    case GET_EVENTS_LIST_REQUEST:
      return {
        ...state,
        // GetEventList: null,
      };
    case GET_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        GetEventList: action.payload, // Update userData with the response data
      };
    case GET_EVENTS_LIST_FAILURE:
      return {
        ...state,
        GetEventList: action.payload,
      };
    case GET_BLOGS_LIST_REQUEST:
      return {
        ...state,
        GetBlogsList: null,
      };
    case GET_BLOGS_LIST_SUCCESS:
      return {
        ...state,
        GetBlogsList: action.payload, // Update userData with the response data
      };
    case GET_BLOGS_LIST_FAILURE:
      return {
        ...state,
        GetBlogsList: action.payload,
      };
    case GET_COUPON_IB_BY_REQUEST:
      return {
        ...state,
        // AddCouponList: null,
      };
    case GET_COUPON_IB_BY_SUCCESS:
      return {
        ...state,
        AddCouponList: action.payload, // Update userData with the response data
      };
    case GET_COUPON_IB_BY_FAILURE:
      return {
        ...state,
        AddCouponList: action.payload,
      };
    case ADD_EVENTS_LIST_REQUEST:
      return {
        ...state,
        // AddCouponList: null,
      };
    case ADD_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        AddEventsList: action.payload, // Update userData with the response data
      };
    case ADD_EVENTS_LIST_FAILURE:
      return {
        ...state,
        AddEventsList: action.payload,
      };

    case ADD_BLOGS_LIST_REQUEST:
      return {
        ...state,
        // AddCouponList: null,
      };
    case ADD_BLOGS_LIST_SUCCESS:
      return {
        ...state,
        AddBlogsList: action.payload, // Update userData with the response data
      };
    case ADD_BLOGS_LIST_FAILURE:
      return {
        ...state,
        AddBlogsList: action.payload,
      };
    case SUB_BRAND_IB_BY_REQUEST:
      return {
        ...state,
        // subbrandres: null,
      };
    case SUB_BRAND_IB_BY_SUCCESS:
      return {
        ...state,
        subbrandres: action.payload, // Update userData with the response data
      };
    case SUB_BRAND_IB_BY_FAILURE:
      return {
        ...state,
        subbrandres: action.payload,
      };
    case ADD_TRACK_LIST_REQUEST:
      return {
        ...state,
        TrackEventres: null,
      };
    case ADD_TRACK_LIST_SUCCESS:
      return {
        ...state,
        TrackEventres: action.payload, // Update userData with the response data
      };
    case ADD_TRACK_LIST_FAILURE:
      return {
        ...state,
        TrackEventres: action.payload,
      };

    /*************************  Microsite  ****************************/

    case MICROSITE_IB_BY_REQUEST:
      return {
        ...state,
        Micrositeres: null,
      };
    case MICROSITE_IB_BY_SUCCESS:
      return {
        ...state,
        Micrositeres: action.payload, // Update userData with the response data
      };
    case MICROSITE_IB_BY_FAILURE:
      return {
        ...state,
        Micrositeres: action.payload,
      };
    case ADD_MICROSITE_LIST_SUCCESS:
      return {
        ...state,
        Micrositeres: action.payload, // Update userData with the response data
      };
    case ADD_MICROSITE_LIST_FAILURE:
      return {
        ...state,
        Micrositeres: action.payload,
      };
    case Edit_MICROSITE_LIST_REQUEST:
      return {
        ...state,
        EditMicrositeres: null,
      };
    case Edit_MICROSITE_LIST_SUCCESS:
      return {
        ...state,
        EditMicrositeres: action.payload, // Update userData with the response data
      };
    case Edit_MICROSITE_LIST_FAILURE:
      return {
        ...state,
        EditMicrositeres: action.payload,
      };
    case Delete_MICROSITE_LIST_REQUEST:
      return {
        ...state,
        DeleteMicrositeres: null,
      };
    case Delete_MICROSITE_LIST_SUCCESS:
      return {
        ...state,
        DeleteMicrositeres: action.payload, // Update userData with the response data
      };
    case Delete_MICROSITE_LIST_FAILURE:
      return {
        ...state,
        DeleteMicrositeres: action.payload,
      };

    /****************** Microsite detail ******************/


    case MICROSITEDETAIL_IB_BY_REQUEST:
      return {
        ...state,
        Micrositedetailres: null,
      };
    case MICROSITEDETAIL_IB_BY_SUCCESS:
      return {
        ...state,
        Micrositedetailres: action.payload, // Update userData with the response data
      };
    case MICROSITEDETAIL_IB_BY_FAILURE:
      return {
        ...state,
        Micrositedetailres: action.payload,
      };
    case ADD_MICROSITEDETAIL_LIST_SUCCESS:
      return {
        ...state,
        Micrositedetailres: action.payload, // Update userData with the response data
      };
    case ADD_MICROSITEDETAIL_LIST_FAILURE:
      return {
        ...state,
        Micrositedetailres: action.payload,
      };
    case Edit_MICROSITEDETAIL_LIST_REQUEST:
      return {
        ...state,
        EditMicrositedetailres: null,
      };
    case Edit_MICROSITEDETAIL_LIST_SUCCESS:
      return {
        ...state,
        EditMicrositedetailres: action.payload, // Update userData with the response data
      };
    case Edit_MICROSITEDETAIL_LIST_FAILURE:
      return {
        ...state,
        EditMicrositedetailres: action.payload,
      };
    case Delete_MICROSITEDETAIL_LIST_REQUEST:
      return {
        ...state,
        DeleteMicrositedetailres: null,
      };
    case Delete_MICROSITEDETAIL_LIST_SUCCESS:
      return {
        ...state,
        DeleteMicrositedetailres: action.payload, // Update userData with the response data
      };
    case Delete_MICROSITEDETAIL_LIST_FAILURE:
      return {
        ...state,
        DeleteMicrositedetailres: action.payload,
      };


    /*************************  Floor Plan  ****************************/

    case FloorPlan_IB_BY_REQUEST:
      return {
        ...state,
        Floorplanres: null,
      };
    case FloorPlan_IB_BY_SUCCESS:
      return {
        ...state,
        Floorplanres: action.payload, // Update userData with the response data
      };
    case FloorPlan_IB_BY_FAILURE:
      return {
        ...state,
        Floorplanres: action.payload,
      };
    case ADD_FloorPlan_LIST_REQUEST:
      return {
        ...state,
        Floorplanres: action.payload, // Update userData with the response data
      };
    case ADD_FloorPlan_LIST_SUCCESS:
      return {
        ...state,
        Floorplanres: action.payload, // Update userData with the response data
      };
    case ADD_FloorPlan_LIST_FAILURE:
      return {
        ...state,
        Floorplanres: action.payload,
      };
    case Edit_FloorPlan_LIST_REQUEST:
      return {
        ...state,
        EditFloorPlanres: null,
      };
    case Edit_FloorPlan_LIST_SUCCESS:
      return {
        ...state,
        EditFloorPlanres: action.payload, // Update userData with the response data
      };
    case Edit_FloorPlan_LIST_FAILURE:
      return {
        ...state,
        EditFloorPlanres: action.payload,
      };
    case Delete_FloorPlan_LIST_REQUEST:
      return {
        ...state,
        DeleteFloorPlanres: null,
      };
    case Delete_FloorPlan_LIST_SUCCESS:
      return {
        ...state,
        DeleteFloorPlanres: action.payload, // Update userData with the response data
      };
    case Delete_FloorPlan_LIST_FAILURE:
      return {
        ...state,
        DeleteFloorPlanres: action.payload,
      };



    /*************************  Amenities  ****************************/

    case Amenities_IB_BY_REQUEST:
      return {
        ...state,
        Amenitiesres: null,
      };
    case Amenities_IB_BY_SUCCESS:
      return {
        ...state,
        Amenitiesres: action.payload, // Update userData with the response data
      };
    case Amenities_IB_BY_FAILURE:
      return {
        ...state,
        Amenitiesres: action.payload,
      };
    case ADD_Amenities_LIST_REQUEST:
      return {
        ...state,
        Amenitiesres: action.payload, // Update userData with the response data
      };
    case ADD_Amenities_LIST_SUCCESS:
      return {
        ...state,
        Amenitiesres: action.payload, // Update userData with the response data
      };
    case ADD_Amenities_LIST_FAILURE:
      return {
        ...state,
        Amenitiesres: action.payload,
      };
    case Edit_Amenities_LIST_REQUEST:
      return {
        ...state,
        EditAmenitiesres: null,
      };
    case Edit_Amenities_LIST_SUCCESS:
      return {
        ...state,
        EditAmenitiesres: action.payload, // Update userData with the response data
      };
    case Edit_Amenities_LIST_FAILURE:
      return {
        ...state,
        EditAmenitiesres: action.payload,
      };
    case Delete_Amenities_LIST_REQUEST:
      return {
        ...state,
        DeleteAmenitiesres: null,
      };
    case Delete_Amenities_LIST_SUCCESS:
      return {
        ...state,
        DeleteAmenitiesres: action.payload, // Update userData with the response data
      };
    case Delete_Amenities_LIST_FAILURE:
      return {
        ...state,
        DeleteAmenitiesres: action.payload,
      };



    /*************************  Specifications  ****************************/

    case Specifications_IB_BY_REQUEST:
      return {
        ...state,
        Specificationsres: null,
      };
    case Specifications_IB_BY_SUCCESS:
      return {
        ...state,
        Specificationsres: action.payload, // Update userData with the response data
      };
    case Specifications_IB_BY_FAILURE:
      return {
        ...state,
        Specificationsres: action.payload,
      };
    case ADD_Specifications_LIST_REQUEST:
      return {
        ...state,
        Specificationsres: action.payload, // Update userData with the response data
      };
    case ADD_Specifications_LIST_SUCCESS:
      return {
        ...state,
        Specificationsres: action.payload, // Update userData with the response data
      };
    case ADD_Specifications_LIST_FAILURE:
      return {
        ...state,
        Specificationsres: action.payload,
      };
    case Edit_Specifications_LIST_REQUEST:
      return {
        ...state,
        EditSpecificationsres: null,
      };
    case Edit_Specifications_LIST_SUCCESS:
      return {
        ...state,
        EditSpecificationsres: action.payload, // Update userData with the response data
      };
    case Edit_Specifications_LIST_FAILURE:
      return {
        ...state,
        EditSpecificationsres: action.payload,
      };
    case Delete_Specifications_LIST_REQUEST:
      return {
        ...state,
        DeleteSpecificationsres: null,
      };
    case Delete_Specifications_LIST_SUCCESS:
      return {
        ...state,
        DeleteSpecificationsres: action.payload, // Update userData with the response data
      };
    case Delete_Specifications_LIST_FAILURE:
      return {
        ...state,
        DeleteSpecificationsres: action.payload,
      };



    /*************************  Specifications Deatil  ****************************/

    case SpecificationsDetail_IB_BY_REQUEST:
      return {
        ...state,
        SpecificationsDetailres: null,
      };
    case SpecificationsDetail_IB_BY_SUCCESS:
      return {
        ...state,
        SpecificationsDetailres: action.payload, // Update userData with the response data
      };
    case SpecificationsDetail_IB_BY_FAILURE:
      return {
        ...state,
        SpecificationsDetailres: action.payload,
      };
    case ADD_SpecificationsDetail_LIST_REQUEST:
      return {
        ...state,
        SpecificationsDetailres: action.payload, // Update userData with the response data
      };
    case ADD_SpecificationsDetail_LIST_SUCCESS:
      return {
        ...state,
        SpecificationsDetailres: action.payload, // Update userData with the response data
      };
    case ADD_SpecificationsDetail_LIST_FAILURE:
      return {
        ...state,
        SpecificationsDetailres: action.payload,
      };
    case Edit_SpecificationsDetail_LIST_REQUEST:
      return {
        ...state,
        EditSpecificationsDetailres: null,
      };
    case Edit_SpecificationsDetail_LIST_SUCCESS:
      return {
        ...state,
        EditSpecificationsDetailres: action.payload, // Update userData with the response data
      };
    case Edit_SpecificationsDetail_LIST_FAILURE:
      return {
        ...state,
        EditSpecificationsDetailres: action.payload,
      };
    case Delete_SpecificationsDetail_LIST_REQUEST:
      return {
        ...state,
        DeleteSpecificationsDetailres: null,
      };
    case Delete_SpecificationsDetail_LIST_SUCCESS:
      return {
        ...state,
        DeleteSpecificationsDetailres: action.payload, // Update userData with the response data
      };
    case Delete_SpecificationsDetail_LIST_FAILURE:
      return {
        ...state,
        DeleteSpecificationsDetailres: action.payload,
      };


    /*************************  BankApproval  ****************************/

    case BankApproval_IB_BY_REQUEST:
      return {
        ...state,
        BankApprovalres: null,
      };
    case BankApproval_IB_BY_SUCCESS:
      return {
        ...state,
        BankApprovalres: action.payload, // Update userData with the response data
      };
    case BankApproval_IB_BY_FAILURE:
      return {
        ...state,
        BankApprovalres: action.payload,
      };
    case ADD_BankApproval_LIST_REQUEST:
      return {
        ...state,
        BankApprovalres: action.payload, // Update userData with the response data
      };
    case ADD_BankApproval_LIST_SUCCESS:
      return {
        ...state,
        BankApprovalres: action.payload, // Update userData with the response data
      };
    case ADD_BankApproval_LIST_FAILURE:
      return {
        ...state,
        BankApprovalres: action.payload,
      };
    case Edit_BankApproval_LIST_REQUEST:
      return {
        ...state,
        EditBankApprovalres: null,
      };
    case Edit_BankApproval_LIST_SUCCESS:
      return {
        ...state,
        EditBankApprovalres: action.payload, // Update userData with the response data
      };
    case Edit_BankApproval_LIST_FAILURE:
      return {
        ...state,
        EditBankApprovalres: action.payload,
      };
    case Delete_BankApproval_LIST_REQUEST:
      return {
        ...state,
        DeleteBankApprovalres: null,
      };
    case Delete_BankApproval_LIST_SUCCESS:
      return {
        ...state,
        DeleteBankApprovalres: action.payload, // Update userData with the response data
      };
    case Delete_BankApproval_LIST_FAILURE:
      return {
        ...state,
        DeleteBankApprovalres: action.payload,
      };


    /*************************  Legal Approval  ****************************/

    case LegalApproval_IB_BY_REQUEST:
      return {
        ...state,
        LegalApprovalres: null,
      };
    case LegalApproval_IB_BY_SUCCESS:
      return {
        ...state,
        LegalApprovalres: action.payload, // Update userData with the response data
      };
    case LegalApproval_IB_BY_FAILURE:
      return {
        ...state,
        LegalApprovalres: action.payload,
      };
    case ADD_LegalApproval_LIST_REQUEST:
      return {
        ...state,
        LegalApprovalres: action.payload, // Update userData with the response data
      };
    case ADD_LegalApproval_LIST_SUCCESS:
      return {
        ...state,
        LegalApprovalres: action.payload, // Update userData with the response data
      };
    case ADD_LegalApproval_LIST_FAILURE:
      return {
        ...state,
        LegalApprovalres: action.payload,
      };
    case Edit_LegalApproval_LIST_REQUEST:
      return {
        ...state,
        EditLegalApprovalres: null,
      };
    case Edit_LegalApproval_LIST_SUCCESS:
      return {
        ...state,
        EditLegalApprovalres: action.payload, // Update userData with the response data
      };
    case Edit_LegalApproval_LIST_FAILURE:
      return {
        ...state,
        EditLegalApprovalres: action.payload,
      };
    case Delete_LegalApproval_LIST_REQUEST:
      return {
        ...state,
        DeleteLegalApprovalres: null,
      };
    case Delete_LegalApproval_LIST_SUCCESS:
      return {
        ...state,
        DeleteLegalApprovalres: action.payload, // Update userData with the response data
      };
    case Delete_LegalApproval_LIST_FAILURE:
      return {
        ...state,
        DeleteLegalApprovalres: action.payload,
      };

    /*************************  Builder  ****************************/

    case Builder_IB_BY_REQUEST:
      return {
        ...state,
        Builderres: null,
      };
    case Builder_IB_BY_SUCCESS:
      return {
        ...state,
        Builderres: action.payload, // Update userData with the response data
      };
    case Builder_IB_BY_FAILURE:
      return {
        ...state,
        Builderres: action.payload,
      };
    case ADD_Builder_LIST_REQUEST:
      return {
        ...state,
        Builderres: action.payload, // Update userData with the response data
      };
    case ADD_Builder_LIST_SUCCESS:
      return {
        ...state,
        Builderres: action.payload, // Update userData with the response data
      };
    case ADD_Builder_LIST_FAILURE:
      return {
        ...state,
        Builderres: action.payload,
      };
    case Edit_Builder_LIST_REQUEST:
      return {
        ...state,
        EditBuilderres: null,
      };
    case Edit_Builder_LIST_SUCCESS:
      return {
        ...state,
        EditBuilderres: action.payload, // Update userData with the response data
      };
    case Edit_Builder_LIST_FAILURE:
      return {
        ...state,
        EditBuilderres: action.payload,
      };
    case Delete_Builder_LIST_REQUEST:
      return {
        ...state,
        DeleteBuilderres: null,
      };
    case Delete_Builder_LIST_SUCCESS:
      return {
        ...state,
        DeleteBuilderres: action.payload, // Update userData with the response data
      };
    case Delete_Builder_LIST_FAILURE:
      return {
        ...state,
        DeleteBuilderres: action.payload,
      };


    /*************************  PropStatus  ****************************/

    case PropStatus_IB_BY_REQUEST:
      return {
        ...state,
        PropStatusres: null,
      };
    case PropStatus_IB_BY_SUCCESS:
      return {
        ...state,
        PropStatusres: action.payload, // Update userData with the response data
      };
    case PropStatus_IB_BY_FAILURE:
      return {
        ...state,
        PropStatusres: action.payload,
      };
    case ADD_PropStatus_LIST_REQUEST:
      return {
        ...state,
        PropStatusres: action.payload, // Update userData with the response data
      };
    case ADD_PropStatus_LIST_SUCCESS:
      return {
        ...state,
        PropStatusres: action.payload, // Update userData with the response data
      };
    case ADD_PropStatus_LIST_FAILURE:
      return {
        ...state,
        PropStatusres: action.payload,
      };
    case Edit_PropStatus_LIST_REQUEST:
      return {
        ...state,
        EditPropStatusres: null,
      };
    case Edit_PropStatus_LIST_SUCCESS:
      return {
        ...state,
        EditPropStatusres: action.payload, // Update userData with the response data
      };
    case Edit_PropStatus_LIST_FAILURE:
      return {
        ...state,
        EditPropStatusres: action.payload,
      };
    case Delete_PropStatus_LIST_REQUEST:
      return {
        ...state,
        DeletePropStatusres: null,
      };
    case Delete_PropStatus_LIST_SUCCESS:
      return {
        ...state,
        DeletePropStatusres: action.payload, // Update userData with the response data
      };
    case Delete_PropStatus_LIST_FAILURE:
      return {
        ...state,
        DeletePropStatusres: action.payload,
      };

    /*************************  PropType  ****************************/

    case PropType_IB_BY_REQUEST:
      return {
        ...state,
        PropTyperes: null,
      };
    case PropType_IB_BY_SUCCESS:
      return {
        ...state,
        PropTyperes: action.payload, // Update userData with the response data
      };
    case PropType_IB_BY_FAILURE:
      return {
        ...state,
        PropTyperes: action.payload,
      };
    case ADD_PropType_LIST_REQUEST:
      return {
        ...state,
        PropTyperes: action.payload, // Update userData with the response data
      };
    case ADD_PropType_LIST_SUCCESS:
      return {
        ...state,
        PropTyperes: action.payload, // Update userData with the response data
      };
    case ADD_PropType_LIST_FAILURE:
      return {
        ...state,
        PropTyperes: action.payload,
      };
    case Edit_PropType_LIST_REQUEST:
      return {
        ...state,
        EditPropTyperes: null,
      };
    case Edit_PropType_LIST_SUCCESS:
      return {
        ...state,
        EditPropTyperes: action.payload, // Update userData with the response data
      };
    case Edit_PropType_LIST_FAILURE:
      return {
        ...state,
        EditPropTyperes: action.payload,
      };
    case Delete_PropType_LIST_REQUEST:
      return {
        ...state,
        DeletePropTyperes: null,
      };
    case Delete_PropType_LIST_SUCCESS:
      return {
        ...state,
        DeletePropTyperes: action.payload, // Update userData with the response data
      };
    case Delete_PropType_LIST_FAILURE:
      return {
        ...state,
        DeletePropTyperes: action.payload,
      };

    /*************************  Microsite Meta Tag  ****************************/

    case MicrositeMetaTag_IB_BY_REQUEST:
      return {
        ...state,
        MicrositeMetaTagres: null,
      };
    case MicrositeMetaTag_IB_BY_SUCCESS:
      return {
        ...state,
        MicrositeMetaTagres: action.payload, // Update userData with the response data
      };
    case MicrositeMetaTag_IB_BY_FAILURE:
      return {
        ...state,
        MicrositeMetaTagres: action.payload,
      };
    case ADD_MicrositeMetaTag_LIST_REQUEST:
      return {
        ...state,
        MicrositeMetaTagres: action.payload, // Update userData with the response data
      };
    case ADD_MicrositeMetaTag_LIST_SUCCESS:
      return {
        ...state,
        MicrositeMetaTagres: action.payload, // Update userData with the response data
      };
    case ADD_MicrositeMetaTag_LIST_FAILURE:
      return {
        ...state,
        MicrositeMetaTagres: action.payload,
      };
    case Edit_MicrositeMetaTag_LIST_REQUEST:
      return {
        ...state,
        EditMicrositeMetaTagres: null,
      };
    case Edit_MicrositeMetaTag_LIST_SUCCESS:
      return {
        ...state,
        EditMicrositeMetaTagres: action.payload, // Update userData with the response data
      };
    case Edit_MicrositeMetaTag_LIST_FAILURE:
      return {
        ...state,
        EditMicrositeMetaTagres: action.payload,
      };
    case Delete_MicrositeMetaTag_LIST_REQUEST:
      return {
        ...state,
        DeleteMicrositeMetaTagres: null,
      };
    case Delete_MicrositeMetaTag_LIST_SUCCESS:
      return {
        ...state,
        DeleteMicrositeMetaTagres: action.payload, // Update userData with the response data
      };
    case Delete_MicrositeMetaTag_LIST_FAILURE:
      return {
        ...state,
        DeleteMicrositeMetaTagres: action.payload,
      };

    /*************************  Microsite Price  ****************************/

    case MicrositePrice_IB_BY_REQUEST:
      return {
        ...state,
        MicrositePriceres: null,
      };
    case MicrositePrice_IB_BY_SUCCESS:
      return {
        ...state,
        MicrositePriceres: action.payload, // Update userData with the response data
      };
    case MicrositePrice_IB_BY_FAILURE:
      return {
        ...state,
        MicrositePriceres: action.payload,
      };
    case ADD_MicrositePrice_LIST_REQUEST:
      return {
        ...state,
        MicrositePriceres: action.payload, // Update userData with the response data
      };
    case ADD_MicrositePrice_LIST_SUCCESS:
      return {
        ...state,
        MicrositePriceres: action.payload, // Update userData with the response data
      };
    case ADD_MicrositePrice_LIST_FAILURE:
      return {
        ...state,
        MicrositePriceres: action.payload,
      };
    case Edit_MicrositePrice_LIST_REQUEST:
      return {
        ...state,
        EditMicrositePriceres: null,
      };
    case Edit_MicrositePrice_LIST_SUCCESS:
      return {
        ...state,
        EditMicrositePriceres: action.payload, // Update userData with the response data
      };
    case Edit_MicrositePrice_LIST_FAILURE:
      return {
        ...state,
        EditMicrositePriceres: action.payload,
      };
    case Delete_MicrositePrice_LIST_REQUEST:
      return {
        ...state,
        DeleteMicrositePriceres: null,
      };
    case Delete_MicrositePrice_LIST_SUCCESS:
      return {
        ...state,
        DeleteMicrositePriceres: action.payload, // Update userData with the response data
      };
    case Delete_MicrositePrice_LIST_FAILURE:
      return {
        ...state,
        DeleteMicrositePriceres: action.payload,
      };


    default:
      return state;
  }
};

export default dataReducer;
