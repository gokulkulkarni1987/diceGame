package com.dicegame.calendar;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class CalendarModule extends ReactContextBaseJavaModule {

    public CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "JIO Meeting");
        return constants;
    }

    @ReactMethod
    public void getTodaysDate(Callback callback) {
        String pattern = "MM/dd/yyyy HH:mm:ss";
        DateFormat df = new SimpleDateFormat(pattern);
        Date today = Calendar.getInstance().getTime();
        System.out.println("inside getTodaysDate()");
        Log.d("CalendarModule", "This has come inside getTodaysDate");
        callback.invoke(df.format(today));
    }

    @ReactMethod
    public void getStringSimple(Callback callback) {
        Log.d("CalendarModule", "This has come inside getStringSimple");
        callback.invoke("This is a simple string");
    }
}
