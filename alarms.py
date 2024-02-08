import time
import threading

def alarm_thread(alarm_time):
    current_time = time.strftime("%H:%M:%S")
    while current_time != alarm_time:
        time.sleep(1)
        current_time = time.strftime("%H:%M:%S")

    print("\nALARM! Wake up!")

def set_alarm():
    print("Enter the time for the alarm (format: HH:MM:SS):")
    alarm_time = input()

    try:
        time.strptime(alarm_time, "%H:%M:%S")
    except ValueError:
        print("Invalid time format. Please use HH:MM:SS.")
        return

    print(f"Alarm set for {alarm_time}")

    # Start a new thread for the alarm
    alarm_thread_instance = threading.Thread(target=alarm_thread, args=(alarm_time,))
    alarm_thread_instance.start()

# Main loop
while True:
    print("\n==== Alarm Clock ====")
    print("1. Set Alarm")
    print("2. Quit")

    choice = input("Enter your choice (1-2): ")

    if choice == '1':
        set_alarm()
    elif choice == '2':
        print("Quitting the Alarm Clock. Goodbye!")
        break
    else:
        print("Invalid choice. Please enter a number between 1 and 2.")
