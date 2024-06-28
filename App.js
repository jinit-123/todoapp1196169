import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, Switch, TouchableOpacity } from 'react-native';

const TaskItem = ({ item, onDelete, onToggle }) => (
  <View style={styles.taskContainer}>
    <Text style={{ flex: 1, textDecorationLine: item.status ? 'line-through' : 'none' }}>
      {item.title}
    </Text>
    <Switch
      onValueChange={onToggle}
      value={item.status}
      thumbColor={item.status ? "#ffffff" : "#f4f3f4"}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      accessibilityLabel={`Toggle status for ${item.title}`}
    />
    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (title.trim()) {
      setTasks([...tasks, { id: Date.now(), title, status: false }]);
      setTitle('');
    }
  };

  const toggleStatus = id => setTasks(tasks.map(task => 
    task.id === id ? {...task, status: !task.status} : task
  ));

  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>todoapp1196169</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Enter Task Title"
        placeholderTextColor="#888"  
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add Task"
          onPress={addTask}
          color="#4CAF50"  
          disabled={!title.trim()}
        />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem 
            item={item}
            onDelete={() => deleteTask(item.id)}
            onToggle={() => toggleStatus(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: 'green', 
  },
  input: {
    marginBottom: 20, 
    paddingHorizontal: 10,
    paddingVertical: 15,  
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white', 
  },
  headerTitle: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'white',  
    textAlign: 'center',  
    marginBottom: 20,  
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'orange',  
  },
  buttonContainer: {
    marginBottom: 10,  
  },
  deleteButton: {
    backgroundColor: 'blue',  
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  }
});
