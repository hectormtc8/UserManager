package com.technical.practices.dao;

import com.technical.practices.models.User;

import java.util.List;

public interface UserDao {

    List<User> fetchUsers();

    void deleteUser(Long id);

    void register(User user);

    User getUserByCredentials(User user);
}
