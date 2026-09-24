package com.technical.practices.controllers;

import com.technical.practices.dao.UserDao;
import com.technical.practices.models.User;
import com.technical.practices.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody User user){
        User logedUser = userDao.getUserByCredentials(user);
        if (logedUser != null) {
            String tokenJwt = jwtUtil.create(String.valueOf(logedUser.getId()), logedUser.getEmail());
            return tokenJwt;
        }else {
            return "FAIL";
        }
    }

}
