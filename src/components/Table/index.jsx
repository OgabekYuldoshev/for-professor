import React, { useState } from "react";
import { Table as TableBase, Button, Space, Input } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const Table = ({ dataSource }) => {
  const [search, setSerach] = useState({
    searchText: "",
    searchedColumn: "",
  });

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) =>
      search.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[search.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSerach({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters, confirm, dataIndex) => {
    clearFilters();
    confirm();
    setSerach({
      searchText: "",
      searchedColumn: dataIndex,
    });
  };

  const columns = [
    {
      title: "Publication",
      sorter: true,
      ...getColumnSearchProps("title"),
      render: (item) => (
        <>
          <h2 className="font-bold hover:underline text-lg">{item.title}</h2>
          <div className="text-gray-500">
            <p>{item.ceo}</p>
            <p>{item.location}</p>
          </div>
        </>
      ),
    },
    {
      title: "Citation",
      width: 100,
      render: () => (
        <>
          <button className="btn">Cite</button>
        </>
      ),
    },
  ];

  return <TableBase dataSource={dataSource} columns={columns} />;
};

export default Table;
