package br.com.armardur.api.handler;

import br.com.armardur.api.exception.BadRequestExceptionDetails;
import org.apache.coyote.BadRequestException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<BadRequestExceptionDetails> handlerBadRequestException(BadRequestException bre) {
        return new ResponseEntity<>(BadRequestExceptionDetails.builder()
                .timestamp(LocalDateTime.now())
                .status(BAD_REQUEST.value())
                .title("Bad Request Exception, Check the Documentation")
                .details(bre.getMessage())
                .developerMessage(bre.getClass().getName())
                .build(), BAD_REQUEST);
    }
}
