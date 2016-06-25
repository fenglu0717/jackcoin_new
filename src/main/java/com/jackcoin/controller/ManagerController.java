package com.jackcoin.controller;

import com.jackcoin.bean.Constants;
import com.jackcoin.bean.Manager;
import com.jackcoin.bean.WebResult;
import com.jackcoin.util.Utils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

/**
 * Created by zuohl on 2016/6/19.
 */
@RestController
@RequestMapping("/manager")
public class ManagerController extends BaseController {

    @RequestMapping("/login")
    public WebResult login(@RequestParam(required = true) String userName,
                           @RequestParam(required = true) String password) {
        WebResult webResult = new WebResult();
        if (userName.trim().equalsIgnoreCase(Constants.MANAGER_USER_NAME) && password.trim().equalsIgnoreCase(Constants.MANAGER_PASSWORD)) {
            webResult.setCode(Constants.RESULT_SUCCESS);
            webResult.setMsg("登录成功");
            String token = Utils.getUuid();
            session.setAttribute(token,userName);
            webResult.setData(token);
        } else {
            webResult.setCode(Constants.RESULT_BUSINESS_ERROR);
            webResult.setMsg("用户名或密码错误");
        }
        return webResult;
    }

}
