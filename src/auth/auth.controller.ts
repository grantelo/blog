import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    login(@Request() req) {
        return this.authService.login(req.user)
    }

    @Post("register")
    register(@Body() dto: CreateUserDto) {
        return this.authService.register(dtp)
    }
}